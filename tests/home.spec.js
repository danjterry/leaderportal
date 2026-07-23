// Example smoke test for Home.dc.html (the homepage).
//
// These pages render via a custom runtime (support.js) that loads React and
// ReactDOM from unpkg.com at runtime, with a Subresource Integrity (SRI) hash
// pinned in support.js. Rather than depend on that CDN being reachable (it
// isn't from every network, and a real CDN outage shouldn't make this test
// flaky), we serve the exact same package versions from node_modules and
// intercept the CDN requests so the page renders fully offline.
const { test, expect } = require('@playwright/test');
const path = require('path');

// React's package.json "exports" map blocks a direct require.resolve() of the
// umd subpath, so resolve from the package root instead.
const reactUmdPath = path.join(path.dirname(require.resolve('react/package.json')), 'umd/react.production.min.js');
const reactDomUmdPath = path.join(path.dirname(require.resolve('react-dom/package.json')), 'umd/react-dom.production.min.js');

async function mockReactCdn(page) {
  await page.route('https://unpkg.com/react@18.3.1/umd/react.production.min.js', (route) =>
    route.fulfill({ path: reactUmdPath, contentType: 'application/javascript' })
  );
  await page.route('https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js', (route) =>
    route.fulfill({ path: reactDomUmdPath, contentType: 'application/javascript' })
  );
}

test.beforeEach(async ({ page }) => {
  await mockReactCdn(page);
  // Never let a test actually submit to the real JotForm endpoint.
  await page.route('https://submit.jotform.com/submit/**', (route) =>
    route.fulfill({ status: 200, contentType: 'text/plain', body: 'ok' })
  );
});

test('homepage renders the hero and the plan-your-visit form', async ({ page }) => {
  await page.goto('/Home.dc.html');

  await expect(
    page.getByRole('heading', { name: 'Welcome to Citipointe Church in Nashville & Franklin, TN' })
  ).toBeVisible();

  await expect(page.getByRole('heading', { name: "We'll save you a seat" })).toBeVisible();
  await expect(page.getByPlaceholder('First name')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Plan my visit' })).toBeVisible();
});

test('submitting the RSVP form empty shows a validation error, not a silent failure', async ({ page }) => {
  await page.goto('/Home.dc.html');

  await page.getByRole('button', { name: 'Plan my visit' }).click();

  await expect(
    page.getByText('Please fill in name, phone, email, and the Sunday you plan to attend.')
  ).toBeVisible();
});

test('submitting a complete RSVP form sends the expected fields to JotForm', async ({ page }) => {
  let submittedBody = null;
  await page.route('https://submit.jotform.com/submit/**', (route) => {
    submittedBody = route.request().postData();
    route.fulfill({ status: 200, contentType: 'text/plain', body: 'ok' });
  });

  await page.goto('/Home.dc.html');

  await page.getByPlaceholder('First name').fill('Jamie');
  await page.getByPlaceholder('Last name').fill('Rivers');
  await page.getByPlaceholder('(000) 000-0000').fill('6155551234');
  await page.getByPlaceholder('you@example.com').fill('jamie@example.com');
  await page.getByRole('button', { name: 'Nashville · 10am' }).click();

  const sundayButtons = page
    .getByText('Which Sunday?', { exact: false })
    .locator('xpath=following-sibling::div[1]//button');
  await sundayButtons.first().click();

  const kidsButtons = page
    .getByText('Bringing kids?', { exact: false })
    .locator('xpath=following-sibling::div[1]//button');
  await kidsButtons.getByText('No', { exact: true }).click();

  await page.getByRole('button', { name: 'Plan my visit' }).click();

  await expect(page.getByText('See you Sunday.')).toBeVisible();

  // The real submit uses mode:'no-cors', which makes the response opaque to
  // the browser — the page can't actually tell if JotForm accepted the data.
  // This assertion is the one place that still checks the *payload itself*,
  // which is exactly what a silent field-name typo would otherwise hide.
  expect(submittedBody).toContain('formID=261978205313054');
  expect(submittedBody).toContain('q4_q4_email2=jamie%40example.com');
});
