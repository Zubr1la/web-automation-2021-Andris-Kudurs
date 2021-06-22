Feature: Website: MQTT.Cool - 2 user chat (messaging) feature 

  Scenario: Chat with 2 users
    Given I see both users have opened the main page and connected to server
    When I see that both users enter the username
    And I see both user connect to the broker
    And I see that both users see themselves and each other in the Connected Users tab
    And I see that user1 sends any message
    And I see that user2 receive the User 1 sent message
    And I see that user2 sends any message
    Then I see that user1 receives the User 2 sent message
    And I see that both users can disconnect and lose connection