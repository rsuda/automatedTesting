let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {

    it('addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('5');

        homepage.enterSecondNumber('7');

        homepage.clickGo();

        homepage.verifyResult('20');

        browser.sleep(2000)

    });

    it('subtraction test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        homepage.clickGo();

        homepage.verifyResult('7');

        browser.sleep(2000)

    });

   

});