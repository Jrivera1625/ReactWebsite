//var webdriver = require('selenium-webdriver'),
//By = webdriver.By,
//until = webdriver.until;
const { Builder, Capabilities, until, By, Key } = require('selenium-webdriver');
const caps = new Capabilities();
caps.setPageLoadStrategy("normal");
//Key = webdriver.Key;
//const { Options } = require('selenium-webdriver/firefox');
//const options = new Options().setBinary('C:/Program Files/Mozilla Firefox/firefox.exe');
//options.setPreference("browser.privatebrowsing.autostart",true);


async function main() {
  // var driver_chr = new webdriver.Builder()
  //  .forBrowser('chrome')

  //  .build();
  let driver_chr = await new Builder().
    withCapabilities(caps).
    forBrowser('chrome').
    build();
  driver_chr.manage().window().maximize();

  try {
    await driver_chr.get("https://boardprep.share.ubc.ca/_layouts/15/FormServer.aspx?XsnLocation=https://boardprep.share.ubc.ca/Submissions/Forms/template.xsn&SaveLocation=https%3A%2F%2Fboardprep%2Eshare%2Eubc%2Eca%2FSubmissions&ClientInstalled=false&DefaultItemOpen=1&Source=https%3A%2F%2Fboardprep%2Eshare%2Eubc%2Eca");
    // await driver_chr.get("https://boardprep.share.ubc.ca/");
    var username = await driver_chr.wait(until.elementLocated(By.name('username')));

    username.sendKeys('ubcuit-a-leadauthor1');

    var password = await driver_chr.wait(until.elementLocated(By.name('password')));

    password.sendKeys('BoardPrep@UBC');


    await driver_chr.wait(until.elementLocated(By.className('credentials_input_submit'))).click();

    driver_chr.sleep(5000);
    //
    var Title = await driver_chr.findElement(By.xpath("/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[8]/td[2]/span/div[1]/span/input"));
    await Title.sendKeys("Automation Testing9" + Key.TAB);
    var by1 = By.xpath('//*[@id="FormControl_V1_I1_O11"]');
    var bonstack = await driver_chr.wait(until.stalenessOf(driver_chr.findElement(by1)));
    console.log(bonstack);
    ///
    var NeedsContributors = await driver_chr.findElement(By.xpath('//*[@id="FormControl_V1_I1_O11"]'));
    await NeedsContributors.click();
    await driver_chr.sleep(3000);

    by2 = By.css('#FormControl_V1_I1_MSC8 > fieldset > span > div:nth-child(1) > span > input[type=checkbox]');
    var office = await driver_chr.findElement(by2);
    await office.click();
    //=
    var contributors = await driver_chr.findElement(By.xpath('/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[13]/td/div[2]/span/span/span/span/table/tbody/tr[1]/td[1]/table/tbody/tr/td/div'));

    await contributors.sendKeys('ubcuit-a-contributor1@mail.ubc.ca;' + Key.TAB);
    await contributors.sendKeys('ubcuit-a-contributor2@mail.ubc.ca;' + Key.TAB);
    driver_chr.sleep(7000);

    var textPromise = driver_chr.findElement(By.xpath("/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[13]/td/div[2]/span/span/span/span/table/tbody/tr[1]/td[1]/table/tbody/tr/td/div")).getText();
    textPromise.then((text) => {
      console.log(text);
    });

    var ExecSponsor = await driver_chr.findElement(By.xpath('/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[14]/td[2]/div/span/span/span/span/table/tbody/tr[1]/td[1]/table/tbody/tr/td/div'));
    await ExecSponsor.sendKeys('ubcuit-a-vpsponsor2@mail.ubc.ca;' + 'ubcuit-a-vpsponsor1@mail.ubc.ca;' + Key.TAB);
    //  await ExecSponsor.sendKeys('ubcuit-a-vpsponsor1@mail.ubc.ca;' + Key.TAB);

    //
    // var ExecSponsor = await driver_chr.findElement(By.xpath('/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[14]/td[2]/div/span/span/span/span/table/tbody/tr[1]/td[1]/table/tbody/tr/td/div'));
    // await ExecSponsor.click();
    //
    // driver_chr.sleep(10000);
    var by = By.xpath('/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[15]/td[3]/div/span[1]/input');
    var StatusNotification = await driver_chr.wait(until.stalenessOf(driver_chr.findElement(by)));
    console.log(StatusNotification);
    var StatusNotification2 = await driver_chr.findElement(By.xpath('/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[15]/td[3]/div/span[1]/input'));
    await StatusNotification2.click();
    var LeadExecOfficeDD = await driver_chr.findElement(By.xpath("/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[11]/td[2]/div/span/span[2]/select"));
    await LeadExecOfficeDD.click();
    var LeadExecOffice = await driver_chr.findElement(By.xpath("/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[11]/td[2]/div/span/span[2]/select/option[14]"));
    await LeadExecOffice.click();
    var LeadExecOfficeDD2 = await driver_chr.findElement(By.xpath("/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[11]/td[2]/div/span/span[2]/select"));
    await LeadExecOfficeDD2.click();
    //
    var BoardDateDD = await driver_chr.findElement(By.xpath("/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[9]/td[2]/div/span/span/select"));
    await BoardDateDD.click();
    var BoardDateDD2 = await driver_chr.findElement(By.xpath("/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[9]/td[2]/div/span/span/select/option[2]"));
    await BoardDateDD2.click();




    ////STOP HERE
    // driver_chr.sleep(7000);
    // var Title = await driver_chr.findElement(By.xpath("/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[2]/table/tbody/tr[8]/td[2]/span/div[1]/span/input"));
    //Title.sendKeys("AutomationTest");
    /*  var by4 = By.css('#FormControl_V1_I1_S21_I7_B1');
      var bonstack1 = await driver_chr.wait(until.stalenessOf(driver_chr.findElement(by4)));
      console.log(bonstack1);
      var BoardDateDD3 = await driver_chr.findElement(By.css("#FormControl_V1_I1_S21_I7_B1"));
      await BoardDateDD3.click(); */





  }
  finally {


  }


}

main();


