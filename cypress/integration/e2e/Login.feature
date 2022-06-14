Feature: Login

    @login @regression
    Scenario Outline: Login successfully
        Given User see login page
        And User put email value <emailValue>
        And User put password value <passwordValue>
        When User click on the submit login button
        Then User should see my account page with the user name <userName>

        Examples:
            | emailValue                       | passwordValue | userName                     |
            | email-cypress-cucumber@gmail.com | test123       | E-mail Cypress Cucumber Test |

    @login
    Scenario Outline: Login unsuccessfully
        Given User see login page
        And User put email value <emailValue>
        And User put password value <passwordValue>
        When User click on the submit login button
        Then User should see the error message <errorMessage>

        Examples:
            | emailValue                       | passwordValue    | errorMessage           |
            | invalid-email@gmail.com          | test123          | Authentication failed. |
            | email-cypress-cucumber@gmail.com | invalid password | Authentication failed. |