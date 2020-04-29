
const { Builder, Capabilities, until, By, Key } = require('selenium-webdriver');
const caps = new Capabilities();
caps.setPageLoadStrategy("normal");



async function main() {
 
  let driver_chr = await new Builder().
    withCapabilities(caps).
    forBrowser('chrome').
    build();
  driver_chr.manage().window().maximize();

  try {
   





  }
  finally {


  }


}

main();


