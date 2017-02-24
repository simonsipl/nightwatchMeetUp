Feature: Google Search

Scenario: Searching for "Google" inside browser title

  Given I open Google's search page
  Then the title is "Google"
  And the Google search form exists

Scenario: Testing failing scenario - test if browser title is "wrongTitle"

  Given I open Google's search page
  Then the title is "wrongTitle"

Scenario: Not implemented Step

  Given I open Google's search page
  Then I want to enter email
  And the title is "gmail"
