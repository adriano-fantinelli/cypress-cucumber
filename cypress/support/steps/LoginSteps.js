/* global Given, Then, When */

import BasePage from '../../support/pages/Base'
import LoginPage from '../../support/pages/Login'
import HomePage from '../../support/pages/Home'

Given(/^User see login page$/, () => {
	BasePage.visit()
});

Given(/^User put email value (.*)$/, (emailValue) => {
	LoginPage.fillInputEmail(emailValue)
});

Given(/^User put password value (.*)$/, (passwordValue) => {
	LoginPage.fillInputPassword(passwordValue)
});

When(/^User click on the submit login button$/, () => {
	LoginPage.clickSubmitLoginButton()
});

Then(/^User should see my account page with the user name (.*)$/, (userName) => {
	HomePage.validateUserName(userName)
	HomePage.validateUrlHome()
	HomePage.validateMyAccountTextExists()
});

Then(/^User should see the error message (.*)$/, (errorMessage) => {
	LoginPage.validateErrorMessageText(errorMessage)
});
