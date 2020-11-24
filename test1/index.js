Survey.StylesManager.applyTheme("modern");

var json = {
  title: "Pre-Screening Assesment for Java Developer",
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
          title: "How many years of experience you have as a Java developer?*",
          choices: [
            "No experience",
            "1 year or less",
            "1-2 years",
            "2-5 years",
            "5+ years",
          ],
        },
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
  document.location = "indexthanks.html";
});

$("#surveyElement").Survey({ model: survey });
