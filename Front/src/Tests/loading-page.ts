import puppeteer from 'puppeteer';


async function launchPage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  return { browser, page };
}

describe('Test de chargement de page', () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;


  beforeEach(async () => {
    const { browser: b, page: p } = await launchPage();
    browser = b;
    page = p;
  });

  afterEach(async () => {
    await browser.close();
  });

  it('doit charger une page', async () => {
    await page.goto('https://www.example.com');
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Example Domain');
  });
});
 