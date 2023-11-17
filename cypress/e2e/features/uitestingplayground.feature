
Feature: Test UI Testing Playground

    # Point 2 of the exercises

    Scenario: Test Dynamic ID page
        Given a user in the uitesting Playground home page
        And the user enter in "Dynamic ID" option in the sections view
        And the title is "Dynamic ID"
        And the description is "Modern applications often generate dynamic IDs for elements. In this case ID is not a reliable attribute for using in element selector. By default many UI automation tools record IDs and this results in tests broken from the very beginning. An automation tool needs a way to instruct it to skip dynamic IDs when XPath is generated for an element."
        And click "Dynamic ID" button
        And the button have the label "Button with Dynamic ID"

    Scenario: Test Input Text Page
        Given a user in the uitesting Playground home page
        And the user enter in "Text Input" option in the sections view
        And the title is "Text Input"
        And the description is "Entering text with physical keyboard can be different from sending DOM events to an element. This page is specifically desined to illustrate this problem. There are cases when attempts to set a text via DOM events lead to nowhere and the only way to proceed is to emulate real keyboard input at OS level."
        And the user enter in the input field "This is a test string"
        And click on the input text page button
        And the input button shows the label "This is a test string"

