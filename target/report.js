$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/AddCustomer.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Customer"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The user is in telecom page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_is_in_telecom_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user click on add customer",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_click_on_add_customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Customer"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "The user is filling all the details",
  "rows": [
    {
      "cells": [
        "Bala",
        "Krishnan",
        "balakrishnan@gmail.com",
        "Chennai",
        "9874568521"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_is_filling_all_the_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see the customer id",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_should_see_the_customer_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The user is in telecom page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_is_in_telecom_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user click on add customer",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_click_on_add_customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Customer"
    },
    {
      "name": "@new"
    }
  ]
});
formatter.step({
  "name": "The user is filling all details",
  "rows": [
    {
      "cells": [
        "fname",
        "Bala"
      ]
    },
    {
      "cells": [
        "lname",
        "Krishnan"
      ]
    },
    {
      "cells": [
        "email",
        "balakrishnan@gmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "Chennai"
      ]
    },
    {
      "cells": [
        "phoneno",
        "9874568521"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_is_filling_all_detailss(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see the customer id",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_should_see_the_customer_id()"
});
formatter.result({
  "status": "skipped"
});
});