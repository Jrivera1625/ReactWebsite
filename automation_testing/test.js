var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

var driver_chr = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

searchTest(driver_chr);

function searchTest(driver) {
  driver.get('http://www.google.com');
  driver.findElement(By.name('q')).sendKeys('webdriver');

  driver.sleep(1000).then(function () {
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.ENTER);
  });


  driver.sleep(2000).then(function () {
    driver.getTitle().then(function (title) {
      console.log(title)
      if (title === 'Google') {
        console.log('Test passed');
      } else {
        console.log('Test failed');
      }
      driver.quit();
    });
  });


}