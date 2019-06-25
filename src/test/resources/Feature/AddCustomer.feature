@Customer

Feature: Title of your feature
  I want to use this template for my feature file
  
  Background:
    Given The user is in telecom page
    And The user click on add customer 

  @test
  Scenario: Title of your scenario
  
    When The user is filling all the details
    |Bala|Krishnan|balakrishnan@gmail.com|Chennai|9874568521|
    And The user click on submit button
    Then The user should see the customer id
    
    
    @new
  Scenario: Title of your scenario
        When The user is filling all details
    |fname|Bala|
    |lname|Krishnan|
    |email|balakrishnan@gmail.com|
    |address|Chennai|
    |phoneno|9874568521|
    And The user click on submit button
    Then The user should see the customer id
  
