
Feature: Test Selenium Easy

    # Point 3 of the exercises, test an advance component

    Background: Go to advanced options
        Given a user in the Selenium Easy Demo home page
        And the user click on " Start Practising " button
        And the user see the examples page with the title "Basic Examples to start with Selenium"
        And the user click on "Proceed Next" button
        And the user click on "Proceed Next" advanced button

    Scenario: Test Selenium Easy Demo (e2e test)
        And click on "Table Pagination" option in the advance options
        Then the user see the first page with the next table:
            | # | Table heading 1 | Table heading 2 | Table heading 3 | Table heading 4 | Table heading 5 | Table heading 6 |
            | 1 | Table cell      | Table cell      | Table cell      | Table cell      | Table cell      | Table cell      |
            | 2 | Table cell      | Table cell      | Table cell      | Table cell      | Table cell      | Table cell      |
            | 3 | Table cell      | Table cell      | Table cell      | Table cell      | Table cell      | Table cell      |
            | 4 | Table cell      | Table cell      | Table cell      | Table cell      | Table cell      | Table cell      |
            | 5 | Table cell      | Table cell      | Table cell      | Table cell      | Table cell      | Table cell      |