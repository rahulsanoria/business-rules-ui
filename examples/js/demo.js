var conditions, actions, nameField, ageField, occupationField, submit, allData;
(function($) {
  var occupationOptions = [ "Software Engineer", "Biz Dev", "Marketing" ];

  function getInitialData() {
    return {
      "variables":[
         {
            "name":"hard_braking",
            "label":"Hard Braking",
            "field_type":"numeric",
            "options":[
   
            ]
         },
         {
            "name":"kms_driven",
            "label":"Kms Driven",
            "field_type":"numeric",
            "options":[
   
            ]
         },
         {
            "name":"non_economy_speed",
            "label":"Non Economy Speed",
            "field_type":"numeric",
            "options":[
   
            ]
         },
         {
            "name":"num_of_days",
            "label":"Num Of Days",
            "field_type":"numeric",
            "options":[
   
            ]
         },
         {
            "name":"num_of_rides",
            "label":"Num Of Rides",
            "field_type":"numeric",
            "options":[
   
            ]
         },
         {
            "name":"over_speeding",
            "label":"Over Speeding",
            "field_type":"numeric",
            "options":[
   
            ]
         },
         {
            "name":"overall_score",
            "label":"Overall Score",
            "field_type":"numeric",
            "options":[
   
            ]
         },
         {
            "name":"potholes",
            "label":"Potholes",
            "field_type":"numeric",
            "options":[
   
            ]
         },
         {
            "name":"rash_acceleration",
            "label":"Rash Acceleration",
            "field_type":"numeric",
            "options":[
   
            ]
         },
         {
            "name":"rough_patches",
            "label":"Rough Patches",
            "field_type":"numeric",
            "options":[
   
            ]
         },
         {
            "name":"sharp_turns",
            "label":"Sharp Turns",
            "field_type":"numeric",
            "options":[
   
            ]
         },
         {
            "name":"speed_breakers",
            "label":"Speed Breakers",
            "field_type":"numeric",
            "options":[
   
            ]
         },
         {
            "name":"speed_variance",
            "label":"Speed Variance",
            "field_type":"numeric",
            "options":[
   
            ]
         }
      ],
      "actions":[
         {
            "name":"add_badges",
            "label":"Add Badges",
            "params":[
               {
                  "label":"Badges",
                  "name":"badges",
                  "fieldType":"text"
               }
            ]
         },
         {
            "name":"add_coins",
            "label":"Add Coins",
            "params":[
               {
                  "label":"Coins",
                  "name":"coins",
                  "fieldType":"numeric"
               }
            ]
         },
         {
            "name":"completion_status",
            "label":"Completion Status",
            "params":[
   
            ]
         },
         {
            "name":"eligibility_status",
            "label":"Eligibility Status",
            "params":[
               {
                  "label":"Is Eligible",
                  "name":"is_eligible",
                  "fieldType":"numeric"
               }
            ]
         },
         {
            "name":"expectation_status",
            "label":"Expectation Status",
            "params":[
               {
                  "label":"Is Expected",
                  "name":"is_expected",
                  "fieldType":"numeric"
               },
               {
                  "label":"Tips",
                  "name":"tips",
                  "fieldType":"text"
               }
            ]
         },
         {
            "name":"qualification_status",
            "label":"Qualification Status",
            "params":[
               {
                  "label":"Is Qualified",
                  "name":"is_qualified",
                  "fieldType":"numeric"
               }
            ]
         }
      ],
      "variable_type_operators":{
         "boolean":[
            {
               "name":"is_false",
               "label":"Is False",
               "input_type":"none"
            },
            {
               "name":"is_true",
               "label":"Is True",
               "input_type":"none"
            }
         ],
         "numeric":[
            {
               "name":"equal_to",
               "label":"Equal To",
               "input_type":"numeric"
            },
            {
               "name":"greater_than",
               "label":"Greater Than",
               "input_type":"numeric"
            },
            {
               "name":"greater_than_or_equal_to",
               "label":"Greater Than Or Equal To",
               "input_type":"numeric"
            },
            {
               "name":"less_than",
               "label":"Less Than",
               "input_type":"numeric"
            },
            {
               "name":"less_than_or_equal_to",
               "label":"Less Than Or Equal To",
               "input_type":"numeric"
            }
         ],
         "select_multiple":[
            {
               "name":"contains_all",
               "label":"Contains All",
               "input_type":"select_multiple"
            },
            {
               "name":"is_contained_by",
               "label":"Is Contained By",
               "input_type":"select_multiple"
            },
            {
               "name":"shares_at_least_one_element_with",
               "label":"Shares At Least One Element With",
               "input_type":"select_multiple"
            },
            {
               "name":"shares_exactly_one_element_with",
               "label":"Shares Exactly One Element With",
               "input_type":"select_multiple"
            },
            {
               "name":"shares_no_elements_with",
               "label":"Shares No Elements With",
               "input_type":"select_multiple"
            }
         ],
         "select":[
            {
               "name":"contains",
               "label":"Contains",
               "input_type":"select"
            },
            {
               "name":"does_not_contain",
               "label":"Does Not Contain",
               "input_type":"select"
            }
         ],
         "string":[
            {
               "name":"contains",
               "label":"Contains",
               "input_type":"text"
            },
            {
               "name":"ends_with",
               "label":"Ends With",
               "input_type":"text"
            },
            {
               "name":"equal_to",
               "label":"Equal To",
               "input_type":"text"
            },
            {
               "name":"equal_to_case_insensitive",
               "label":"Equal To (case insensitive)",
               "input_type":"text"
            },
            {
               "name":"matches_regex",
               "label":"Matches Regex",
               "input_type":"text"
            },
            {
               "name":"non_empty",
               "label":"Non Empty",
               "input_type":"none"
            },
            {
               "name":"starts_with",
               "label":"Starts With",
               "input_type":"text"
            }
         ]
      }
   };
  };

  function onReady() {
    conditions = $("#conditions");
    actions = $("#actions");
    nameField = $("#nameField");
    occupationField = $("#occupationField");
    ageField = $("#ageField");
    submit = $("#submit");
    allData = getInitialData();

    initializeConditions(allData);
    initializeActions(allData);
    initializeForm();
  }

  function initializeConditions(data) {
    conditions.conditionsBuilder(data)
  }

  function initializeActions(data) {
    actions.actionsBuilder(data);
  }

  function initializeForm() {
    for(var i=0; i < occupationOptions.length; i++) {
      var o = occupationOptions[i];
      occupationField.append($("<option>", {value: o.name, text: o.label}));
    }

    submit.click(function(e) {
      e.preventDefault();
      console.log("CONDITIONS");
      console.log(JSON.stringify(conditions.conditionsBuilder("data")));
      console.log("ACTIONS");
      console.log(JSON.stringify(actions.actionsBuilder("data")));
    });
  }
  $(onReady);
})(jQuery);
