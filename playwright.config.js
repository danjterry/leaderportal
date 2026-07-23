// @ts-check
const { defineConfig } = require('@playwright/test');
const fs = require('fs');

// Some sandboxed dev environments ship a pre-installed Chromium at a fixed
// path instead of the one `npx playwright install` would download. Use it
// only when it's actually there; everywhere else (a normal laptop, CI) this
// is a no-op and Playwright uses its own managed browser as usual.
const sandboxChromium = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const executablePath = fs.existsSync(sandboxChromium) ? sandboxChromium : undefined;

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: true,
  reporter: [['list']],
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'retain-on-failure',
    launchOptions: executablePath ? { executablePath } : {},
  },
  webServer: {
    command: 'npx serve . -l 4173',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 15000,
  },
});
