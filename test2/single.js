Survey.StylesManager.applyTheme("modern");

var json = {
  title: "Pre-Screening Assesment for Frontend Developer",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "education_level",
          isRequired: true,
          title: "What is your highest level of education?* ",
          choices: [
            "High School diploma or equivalent",
            "College Diploma",
            "Associate's degree",
            "Bachelor's degree",
            "Master's degree",
          ],
        },
        {
          type: "radiogroup",
          name: "experience_duration",
          isRequired: true,
          title:
            "How many years of experience you have as a Frontend developer?*",
          choices: [
            "No experience",
            "1 year or less",
            "1-2 years",
            "2-5 years",
            "5+ years",
          ],
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "radiogroup",
          name: "current_employment",
          title: "Are you currently working?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
        {
          type: "comment",
          name: "job_title",
          visibleIf: "{current_employment} = 'Yes'",
          title: "What is your current job title?",
        },
        {
          type: "comment",
          name: "apply_reason",
          isRequired: true,
          title: "Why did you apply for this position?*",
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "checkbox",
          name: "ui_knowledge",
          isRequired: true,
          hasNone: true,
          title: "Do you have knowledge on the following UI Components?",
          choices: ["HTML", "CSS", "JavaScript", "Jquery"],
        },
        {
          type: "comment",
          name: "job_projects",
          isRequired: true,
          title:
            "Mention two or three projects you have worked on that are relevant to this position.",
        },
      ],
    },
    {
      name: "page4",
      elements: [
        {
          type: "nouislider",
          name: "range",
          title: "What are your salary expectations? (Hourly wage)",
        },
        {
          type: "comment",
          name: "job_company",
          isRequired: true,
          title: "Why would you like to work with our company?",
        },
      ],
    },
    {
      name: "page5",
      elements: [
        {
          type: "radiogroup",
          name: "background_check",
          title: "Can we run a thorough background check on you? ",
          isRequired: true,
          choices: ["Yes", "No"],
        },
        {
          type: "multipletext",
          name: "contact_customer",
          title: "Want us to follow-up? Leave your name and email here:",
          items: [
            {
              name: "Name",
            },
            {
              name: "E-mail",
              inputType: "email",
              validators: [
                {
                  type: "email",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function (result) {
  document.location = "singlethanks.html";
});

$("#surveyElement").Survey({ model: survey });

function animate(animitionType, duration) {
  if (!duration) duration = 1000;
  var element = document.getElementById("surveyElement");
  $(element).velocity(animitionType, { duration: duration });
}

var doAnimantion = true;
survey.onCurrentPageChanging.add(function (sender, options) {
  if (!doAnimantion) return;
  options.allowChanging = false;
  setTimeout(function () {
    doAnimantion = false;
    sender.currentPage = options.newCurrentPage;
    doAnimantion = true;
  }, 500);
  animate("slideUp", 500);
});
survey.onCurrentPageChanged.add(function (sender) {
  animate("slideDown", 500);
});
survey.onCompleting.add(function (sender, options) {
  if (!doAnimantion) return;
  options.allowComplete = false;
  setTimeout(function () {
    doAnimantion = false;
    sender.doComplete();
    doAnimantion = true;
  }, 500);
  animate("slideUp", 500);
});
animate("slideDown", 1000);
