
Feature: Test the Phone Store

    Scenario: Add a Phone to cart
        Given a user in the Phone Store home page
        And the user enter "Iphone" in the searchbar
        And click on Search button
        When the user select the first option in the grid View
        And click on Add to cart button
        And the phone is added to the cart
        And the user go to the cart
        And the user click on "Remove" button
        Then the phone is removed to the cart