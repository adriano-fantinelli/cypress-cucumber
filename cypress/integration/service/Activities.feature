Feature: Login

    @activities @regression
    Scenario Outline: Search for all activities
        When User search for all activities
        Then User should receive status code <statusCode>
        And User should receive response body equal to the activities contract

        Examples:
            | statusCode |
            | 200        |

    @activities
    Scenario Outline: Search for specific activity
        When User search for activity with id <id>
        Then User should receive status code <statusCode>
        And User should receive activity with id <id> on response body
        And User should receive response body equal to the activity contract

        Examples:
            | id | statusCode |
            | 10 | 200        |

    @activities
    Scenario Outline: Create an activity
        When User create activity with id <id>, title <title>, dueDate <dueDate> and completed <completed>
        Then User should receive status code <statusCode>
        And User should receive the activity on response body with id <id>, title <title>, dueDate <dueDate> and completed <completed>
        And User should receive response body equal to the activity contract

        Examples:
            | id | title         | dueDate                  | completed | statusCode |
            | 31 | Test Activity | 2020-09-15T14:45:28.007Z | false     | 200        |

    @activities
    Scenario Outline: Edit an activity
        When User create activity with id <id>, title <title>, dueDate <dueDate> and completed <completed>
        When User edit activity with id <id>, title <titleEdited>, dueDate <dueDateEdited> and completed <completedEdited>
        Then User should receive status code <statusCode>
        And User should receive the activity on response body with id <id>, title <titleEdited>, dueDate <dueDateEdited> and completed <completedEdited>
        And User should receive response body equal to the activity contract

        Examples:
            | id | title         | dueDate                  | completed | titleEdited          | dueDateEdited            | completedEdited | statusCode |
            | 31 | Test Activity | 2020-09-15T14:45:28.007Z | false     | Test Activity Edited | 2020-09-16T14:45:28.007Z | true            | 200        |

    @activities
    Scenario Outline: Delete an activity
        When User create activity with id <id>, title <title>, dueDate <dueDate> and completed <completed>
        When User delete activity with id <id>
        Then User should receive status code <statusCode>

        Examples:
            | id | title         | dueDate                  | completed | statusCode |
            | 31 | Test Activity | 2020-09-15T14:45:28.007Z | false     | 200        |
