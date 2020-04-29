const { Builder, Capabilities, until, By, Key } = require('selenium-webdriver');
const caps = new Capabilities();
caps.setPageLoadStrategy("normal");
const parse = require('csv-parse');
const fs = require('fs');

//Drop Down Selections
var projectOriginArr = {
    'SERVICENOW': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[5]/td[2]/div/span[2]/select/option[2]',
    'INC': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[5]/td[2]/div/span[2]/select/option[3]',
    'PMDIRECT': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[5]/td[2]/div/span[2]/select/option[4]',
    'MGMTDIRECT': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[5]/td[2]/div/span[2]/select/option[5]',
    'RENEWALPLANNING': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[5]/td[2]/div/span[2]/select/option[6]',
    'PROJECTSERVICES': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[5]/td[2]/div/span[2]/select/option[7]',
    'PT': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[5]/td[2]/div/span[2]/select/option[8]',
    'FACILITIES': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[5]/td[2]/div/span[2]/select/option[9]',
    'CSM/UBCITRENEWAL': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[5]/td[2]/div/span[2]/select/option[10]',
    'OTHER': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[5]/td[2]/div/span[2]/select/option[11]'
};

var projectTypeArr = {
    'GTSRENEWAL': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select/option[2]',
    'RESTRICTEDRENEWAL': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select/option[3]',
    'LSAC': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select/option[4]',
    'CAPITAL': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select/option[5]',
    'DEPARTMENTFUNDED': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select/option[6]',
    'ENTERPRISE': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select/option[7]',
    'FOMRENEWAL': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select/option[8]',
    'OPERATIONAL': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select/option[9]',
    'NETNEWHOSPITAL': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select/option[10]',
    'RELOCATION': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select/option[11]',
    'RENOVATION': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select/option[12]',
    'LIGHTING': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select/option[13]',
    'HOSPITALREDEVELOPMENT': '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select/option[10]'

};
var Sleeptime = 5000;
var projectTypeDDXpath = '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[9]/td[2]/div/span/select';
var InstallationCompleteXpath = '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[9]/table/tbody/tr[11]/td[2]/div/table/tbody/tr/td[1]/div/span/input';
var RFPtenderXpath = '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[9]/table/tbody/tr[7]/td[2]/div/table/tbody/tr/td[1]/div/span/input';
var ProjectManagerXpath = '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[4]/table/tbody/tr[2]/td[2]/span/span/span/table/tbody/tr[1]/td[1]/table/tbody/tr/td/div';
var DesignerXpath = '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[4]/table/tbody/tr[3]/td[2]/div/span/span/span/table/tbody/tr[1]/td[1]/table/tbody/tr/td/div';
var ProjectCoordinatorXpath = '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[4]/table/tbody/tr[4]/td[2]/div/span/span/span/table/tbody/tr[1]/td[1]/table/tbody/tr/td/div';
var ScopeXpath = '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[11]/td[2]/div/div/div/fieldset/span/div/span/div';
var commentXpath = '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[12]/td[2]/h4/span/textarea';
var projectHealthDDXpath = '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[6]/td[2]/span[3]/select';
var ProjectHealthXpath = '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[6]/td[2]/span[3]/select/option[3]';
var ProjectNameXpath = '/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[7]/td[2]/div/span[3]/input';
const csvData = [];
fs.createReadStream('C:/Users/jrive/Desktop/Website/ReactWebsite/automation_testing/CsvFiles/AVP.csv')
    .pipe(
        parse(
            {
                delimiter: ','
            }
        )
    )
    .on('data', function (dataRow) {
        csvData.push(dataRow);
    })
    .on('end', function () {
        console.log(csvData.length);
        console.log(csvData[1]);
    });

async function main() {

    for (var i = 232; i < 240; i++) {

        let driver_chr = await new Builder().
            withCapabilities(caps).
            forBrowser('chrome').
            build();
        driver_chr.manage().window().maximize();

        console.log("Data for the " + i + " row");
        console.log(csvData[i]);
        await driver_chr.get("https://tstav.share.ubc.ca/secondtestsite/_layouts/15/FormServer.aspx?XsnLocation=https://tstav.share.ubc.ca/secondtestsite/AV%20Test%20InfoPath%20Library/Forms/template.xsn&SaveLocation=https%3A%2F%2Ftstav%2Eshare%2Eubc%2Eca%2Fsecondtestsite%2FAV%20Test%20InfoPath%20Library&ClientInstalled=true&DefaultItemOpen=1&Source=https%3A%2F%2Ftstav%2Eshare%2Eubc%2Eca%2Fsecondtestsite%2Fsitepages%2Fhome%2Easpx");
        var username = await driver_chr.wait(until.elementLocated(By.name('username')));
        username.sendKeys('YOURUSERNAME');

        var password = await driver_chr.wait(until.elementLocated(By.name('password')));

        password.sendKeys('YOURPASSWORD' + Key.ENTER);
        // await driver_chr.wait(until.elementTextContains(driver_chr.findElement(By.xpath('/html/head/title')), "AV Test InfoPath Library - New Form"));
        await driver_chr.sleep(10000);
        // var AddProject = await driver_chr.findElement(By.xpath('/html/body/form/div[12]/div/div[2]/div[2]/div[3]/div[4]/div/div/table/tbody/tr/td/div/div/div[1]/div[1]/div/div/div/div[1]/div/div/button'));
        // await AddProject.click();
        var DateAssign = csvData[i][1];
        if (DateAssign == '') {

        }
        else {
            var DateAssigned = await driver_chr.findElement(By.xpath('/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[3]/td[2]/span/div/table/tbody/tr/td[1]/div/span/input'));
            await DateAssigned.sendKeys(csvData[i][1] + Key.TAB);
        }

        var ReqDate = csvData[i][0];
        if (ReqDate == '') {

        }
        else {
            var RequestDate = await driver_chr.findElement(By.xpath('/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[4]/td[2]/div/span/table/tbody/tr/td[1]/div/span/input'));
            await RequestDate.sendKeys(csvData[i][0] + Key.TAB);
        }
        await driver_chr.sleep(8000);

        var ProjectOriginDD = await driver_chr.findElement(By.xpath('/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[5]/td[2]/div/span[2]/select'));
        await ProjectOriginDD.click();
        console.log("project origin was " + projectOriginArr[csvData[i][2]]);
        var ProjectOriginData = csvData[i][2];

        var ProjectOrigin = await driver_chr.findElement(By.xpath(projectOriginArr[ProjectOriginData.replace(/\s/g, '')]));
        await ProjectOrigin.click();

        await driver_chr.sleep(8000);

        var ProjectHealthDD = await driver_chr.findElement(By.xpath(projectHealthDDXpath));
        await ProjectHealthDD.click();
        var ProjectHealth = await driver_chr.findElement(By.xpath(ProjectHealthXpath));
        await ProjectHealth.click();

        await driver_chr.sleep(8000);

        var ProjectName = await driver_chr.findElement(By.xpath(ProjectNameXpath));
        await ProjectName.sendKeys(csvData[i][5] + Key.TAB);

        await driver_chr.sleep(8000);

        var CsvProjectType = csvData[i][3];
        var ProjectTypeData = projectTypeArr[CsvProjectType.replace(/\s/g, '').toUpperCase()];
        console.log("Project Type path was " + ProjectTypeData);
        if (CsvProjectType == '') {

        } else {
            var ProjectTypeDD = await driver_chr.findElement(By.xpath(projectTypeDDXpath));
            await ProjectTypeDD.click();
            //var CsvProjectType = csvData[i][3];

            var ProjectType = await driver_chr.findElement(By.xpath(ProjectTypeData));
            await ProjectType.click();
        }

        await driver_chr.sleep(Sleeptime);

        var Scope = await driver_chr.findElement(By.xpath(ScopeXpath));
        await Scope.sendKeys(csvData[i][6]);

        await driver_chr.sleep(Sleeptime);

        var Comment1 = await driver_chr.findElement(By.xpath(commentXpath));
        await Comment1.sendKeys(csvData[i][12]);

        await driver_chr.sleep(Sleeptime);

        var ProjectManager = await driver_chr.findElement(By.xpath(ProjectManagerXpath));
        await ProjectManager.sendKeys(csvData[i][9]);

        await driver_chr.sleep(Sleeptime);

        var ProjectCoordinator = await driver_chr.findElement(By.xpath(ProjectCoordinatorXpath));
        await ProjectCoordinator.sendKeys(csvData[i][10]);

        await driver_chr.sleep(Sleeptime);

        var Designer = await driver_chr.findElement(By.xpath(DesignerXpath));
        await Designer.sendKeys(csvData[i][11]);

        await driver_chr.sleep(Sleeptime);

        var ProjectBuildingDD = await driver_chr.findElement(By.xpath('/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[8]/td[2]/span[2]/select'));
        await ProjectBuildingDD.click();
        var ProjectBuilding = await driver_chr.findElement(By.xpath('/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[8]/td[2]/span[2]/select/option[2]'));
        await ProjectBuilding.click();

        await driver_chr.sleep(Sleeptime);

        var RFPdate = csvData[i][7];
        if (RFPdate == '') {

        }
        else {
            var RFPtender = await driver_chr.findElement(By.xpath(RFPtenderXpath));
            await RFPtender.sendKeys(csvData[i][7]);
        }

        await driver_chr.sleep(Sleeptime);
        var Implementation = csvData[i][8];
        if (Implementation == '') {

        }
        else {
            var Installation = await driver_chr.findElement(By.xpath(InstallationCompleteXpath));
            await Installation.sendKeys(csvData[i][8]);
        }

        var ClientDepartment = await driver_chr.findElement(By.xpath('/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[2]/table/tbody/tr[10]/td[3]/div/div/div/fieldset/span/div/span/div'));
        await ClientDepartment.sendKeys('Default text');


        await driver_chr.sleep(20000);
        var Assign = await driver_chr.findElement(By.xpath('/html/body/form/div[5]/div/div/div/span/div[2]/div/div/div/div/div/div/div[1]/table/tbody/tr[2]/td/div[19]/table/tbody/tr[1]/td[2]/div/div/div/fieldset/div/div/span/input'));
        await Assign.click();
        // await driver_chr.sleep(20000);
        //  driver_chr.quit(); */



    }


















}

main();


