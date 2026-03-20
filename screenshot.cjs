const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Set viewport to a nice desktop size
    await page.setViewport({width: 1440, height: 900});
    
    console.log('Navigating to website...');
    await page.goto('https://prashant-gtx.github.io/', {waitUntil: 'networkidle0', timeout: 60000});
    
    console.log('Waiting 10 seconds for initial 3D load and GSAP animations...');
    await new Promise(r => setTimeout(r, 10000));
    
    console.log('Taking screenshot...');
    await page.screenshot({path: 'public/images/preview.png'});
    
    console.log('Screenshot saved over the old image.');
    await browser.close();
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
})();
