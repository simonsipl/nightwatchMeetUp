Feature: Google Search

Scenario: Searching Google

  Given I open Google's search page
  Then the title is "Google"
  And the Google search form exists

Scenario: Searching Not Google

  Given I open Google's search page
  Then the title is "wrongTitle"

Scenario: Not implemented Step

  Given I open Google's search page
  Then I want to enter email
  And the title is "gmail"
