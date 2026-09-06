// Single source of truth for the Lifegroups directory.
// Source: "Lifegroup Zap - Lifegroups Directory" (CCB export), Aug 2026.
// PUBLIC-SAFE ONLY — leader emails and mobile numbers from the export are
// deliberately NOT included here. Requests route through JotForm to leaders.
//
// formName MUST match the JotForm dropdown option string exactly, character for
// character, or prefill/routing silently breaks.
//
// Every Lifegroup meets on a Wednesday — the day is not stored per group.
// Surnames appear only where the export actually names both people (e.g. the
// Taylors, the Carrs). Where it names one, both leaders show first-name-only
// rather than borrowing a surname we cannot verify.
// `contact` is the sheet's "who reaches out" column — an assistant leader or
// leader who handles admin for the group. Internal only, never rendered.

export const GROUPS = [
  { id: 'chris-kim', art: 'assets/groups/chris-kim.webp', formName: "Chris and Kim's Lifegroup", leaders: 'Chris & Kim Peterson', assistants: 'David Nguyen & Miranda Lightner', campus: 'Nashville', area: 'Nippers Corner', time: '6:30pm', kids: false, demographics: ['Young Adults'], status: 'Full' },
  { id: 'matt-steph', art: 'assets/groups/matt-steph.webp', formName: "Matt and Steph's Lifegroup", leaders: 'Matt & Steph Utterback', assistants: '', campus: 'Nashville', area: 'Nippers Corner', time: '5:00pm', kids: true, demographics: ['Adults'], status: 'Open' },
  { id: 'mickey-greg', art: 'assets/groups/mickey-greg.webp', formName: "Greg and Mickey's Lifegroup", leaders: 'Greg & Mickey Taylor', assistants: 'Steve & Kathy Carter', campus: 'Nashville', area: 'Brentwood', time: '6:30pm', kids: false, demographics: ['Adults'], status: 'Full' },
  { id: 'freddie-cheri', art: 'assets/groups/freddie-cheri.webp', formName: "Freddie and Cheri's Lifegroup", leaders: 'Freddie & Cheri Carr', assistants: 'Melissa & Nate Bentley', campus: 'Nashville', area: 'Antioch', time: '6:30pm', kids: true, demographics: ['Young Adults', 'Adults'], status: 'Open' },
  { id: 'lisa-diane', art: 'assets/groups/lisa-diane.webp', formName: "Lisa and Diane's Lifegroup", leaders: 'Lisa Walker & Diane Hatchett', assistants: 'Jessica Marse', campus: 'Nashville', area: 'Antioch', time: '7:00pm', kids: false, demographics: ['Young Adults', 'Adults', 'Women'], status: 'Open' },
  { id: 'michael-michaela', art: 'assets/groups/michael-michaela.webp', formName: "Michael and Michaela's Lifegroup", leaders: 'Michael & Michaela Piper', assistants: 'Kalyn & Alex Nelson', campus: 'Nashville', area: 'Antioch', time: '6:30pm', kids: false, demographics: ['Young Adults'], status: 'Full' },
  { id: 'dylan-tasmin', art: 'assets/groups/dylan-tasmin.webp', formName: "Dylan and Tasmin's Lifegroup", leaders: 'Dylan & Tasmin Hibbert', assistants: '', campus: 'Nashville', area: 'Antioch', time: '5:00pm', kids: true, demographics: ['Young Families'], status: 'Full' },
  { id: 'levi-bryan', art: 'assets/groups/levi-bryan.webp', formName: "Levi and Bryan's Lifegroup", leaders: 'Levi Winnington & Bryan Henkel', assistants: 'Angel Padilla', campus: 'Nashville', area: 'Antioch', time: '6:30pm', kids: false, demographics: ['Young Adults', 'Men'], status: 'Open' },
  { id: 'john-tricia', art: 'assets/groups/john-tricia.webp', formName: "John and Tricia's Lifegroup", leaders: 'John & Tricia Prather', assistants: 'Reggie & Ife Scott', campus: 'Nashville', area: 'Antioch', time: '6:30pm', kids: false, demographics: ['Adults'], status: 'Open' },
  { id: 'pedro-kristina', art: 'assets/groups/pedro-kristina.webp', formName: "Pedro and Kristina's Lifegroup", leaders: 'Pedro & Kristina Vinhais', assistants: 'Robin & Max Penir', campus: 'Nashville', area: 'Spring Hill', time: '7:00pm', kids: false, demographics: ['Young Adults'], status: 'Open' },
  { id: 'tammy-neal', art: 'assets/groups/tammy-neal.webp', formName: "Tammy & Neal Kelley's Lifegroup", leaders: 'Tammy & Neal Kelley', assistants: 'Eric & Jodi Madej', contact: 'Tammy Kelley', campus: 'Nashville', area: 'Murfreesboro', time: '6:30pm', kids: false, demographics: ['Adults'], status: 'Open' },
  { id: 'christina-jedediah', art: 'assets/groups/christina-jedediah.webp', formName: "Christina and Jedediah's Lifegroup", leaders: 'Christina & Jed Vivio', assistants: '', campus: 'Nashville', area: 'Nolensville', time: '5:30pm', kids: true, demographics: ['Married Couples', 'Young Families'], status: 'Open' },
  { id: 'tyler-erica', art: 'assets/groups/tyler-erica.webp', formName: "Tyler and Erica's Lifegroup", leaders: 'Tyler & Erica Thayer', assistants: 'Matt & Kim Rodgers', campus: 'Nashville', area: 'Nolensville', time: '6:30pm', kids: true, demographics: ['Adults', 'Families'], status: 'Open' },
  { id: 'jericco-shantelle', art: 'assets/groups/jericco-shantelle.webp', formName: "Jericco and Shantelle's Lifegroup", leaders: 'Jericco & Shantelle Vera', assistants: 'Nikki & Dalton Steele', campus: 'Nashville', area: 'East Nashville', time: '6:30pm', kids: false, demographics: ['Young Adults', 'Young Families'], status: 'Full' },
  { id: 'jimmy-tishara', art: 'assets/groups/jimmy-tishara.webp', formName: "Jimmy and Tishara's Lifegroup", leaders: 'Jimmy & Tishara Pitts', assistants: '', campus: 'Nashville', area: 'Smyrna', time: '6:30pm', kids: false, demographics: ['Adults'], status: 'Open' },
  { id: 'art-otelia', art: 'assets/groups/art-otelia.webp', formName: "Art and Otelia's Lifegroup", leaders: 'Art & Otelia Blackburn', assistants: 'Kirstie Shreuder & Beverly Erwin', campus: 'Nashville', area: 'At the church', time: '12:00pm', kids: false, demographics: ['Seniors'], status: 'Open' },
  { id: 'stuart-kelsey', art: 'assets/groups/stuart-kelsey.webp', formName: "Stuart and Kelsey's Lifegroup", leaders: 'Stuart & Kelsey McCloud', assistants: '', campus: 'Franklin', area: 'Bradford Hills', time: '6:30pm', kids: true, demographics: ['Young Adults', 'Adults', 'Young Families'], status: 'Open' },
  { id: 'dj-aileen', art: 'assets/groups/dj-aileen.webp', formName: "Dj and Aileen's Lifegroup", display: 'DJ & Aileen', leaders: 'DJ & Aileen Adkison', assistants: '', campus: 'Franklin', area: 'Franklin', time: '6:30pm', kids: false, demographics: ['Young Adults'], status: 'Open' },
  { id: 'eva-katrina', art: 'assets/groups/eva-katrina.webp', formName: "Eva and Katrina's Lifegroup", leaders: 'Eva & Katrina', assistants: '', campus: 'Franklin', area: 'Franklin', time: '7:00pm', kids: false, demographics: ['Women'], status: 'Open' },
];

// Filter vocabularies, ordered for the UI (not alphabetised by accident).
export const CAMPUSES = ['Nashville', 'Franklin'];
export const DEMOGRAPHICS = ['Young Adults', 'Adults', 'Married Couples', 'Young Families', 'Families', 'Seniors', 'Men', 'Women'];
export const AREAS = [...new Set(GROUPS.map(g => g.area))].sort((a, b) => a.localeCompare(b));

// Derived from formName so the card and the JotForm option can never drift.
// `display` overrides it if a form option's spelling is ever wrong (formName
// must stay byte-identical to the JotForm option).
// Status comes from the sheet's Status column. Anything other than "Open" —
// "Full", "Closed", "Paused" — hides the request button so a group at capacity
// stops taking requests instead of collecting ones its leaders must decline.
export function isOpen(g) {
  return String(g.status || 'Open').trim().toLowerCase() === 'open';
}

export function displayName(g) {
  return g.display || g.formName.replace(/ and /, ' & ').replace(/'s Lifegroup$/, '');
}

// `art` is the season's 16:9 leader graphic (photo + name + assistant leaders,
// already branded). Groups still waiting on artwork get a typographic panel
// instead of a stock photo — an unrelated house photo under real people's names
// reads as a stand-in for THEM, which is worse than no photo at all.
export function art(g) {
  return g.art || null;
}

// Two Franklin groups have area === campus; don't say "Franklin · Franklin".
export function place(g) {
  return g.area === g.campus ? g.area : `${g.area} \u00B7 ${g.campus}`;
}

// Area line for cards that already show the campus separately.
export function areaLine(g) {
  return g.area === g.campus ? 'Wednesdays' : `Wednesdays \u00B7 ${g.area}`;
}

export function initials(g) {
  return displayName(g).split('&').map(p => p.trim()[0]).filter(Boolean).join('');
}

// JotForm: "Request to Join a Lifegroup" — form ID 262158145918059.
// Field keys read live from the form's own definition (form/{id}/questions), not
// guessed: each key is q{qid}_{name}. Required on the JotForm side: name, email,
// phone, campus, group, neighborhood, kids. Notes is optional.
// If a field is deleted and re-added in JotForm its key changes and that answer
// starts arriving blank — re-read the questions endpoint if the form is edited.
export const JOTFORM = {
  id: '262158145918059',
  action: 'https://submit.jotform.com/submit/262158145918059',
  publicUrl: 'https://form.jotform.com/262158145918059',
  fields: {
    firstName: 'q2_fullname0[first]',
    lastName: 'q2_fullname0[last]',
    email: 'q3_email1',
    phone: 'q4_phone2[full]',
    campus: 'q5_dropdown3',
    group: 'q6_dropdown4',
    neighborhood: 'q7_textbox5',
    kids: 'q10_areYou',
    notes: 'q8_textarea6',
  },
};
