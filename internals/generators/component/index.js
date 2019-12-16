"use strict";

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add a component",
  prompts: [
    {
      type: "list",
      name: "type",
      message: "Select the type of component",
      default: "Functional",
      choices: () => ["Functional"]
    },
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Button",
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or container with this name already exists"
            : true;
        }

        return "The name is required";
      }
    },
    {
      type: "directory",
      name: "path",
      message: "Where you like to put this component?",
      basePath: "./"
    },
    {
      type: "confirm",
      name: "wantStorybook",
      default: true,
      message: "Do you want a story for the component to be created?"
    }
  ],
  actions: data => {
    let componentTemplate;

    switch (data.type) {
      case "Functional": {
        componentTemplate = "./component/functional";
        break;
      }
      default: {
        componentTemplate = "./component/functional";
      }
    }

    const actions = [
      {
        type: "add",
        path: "../../{{path}}/{{kebabCase name}}/{{kebabCase name}}.tsx",
        templateFile: `${componentTemplate}/component.js.hbs`,
        abortOnFail: true
      },
      {
        type: "add",
        path: "../../{{path}}/{{kebabCase name}}/index.ts",
        templateFile: `${componentTemplate}/index.js.hbs`,
        abortOnFail: true
      }
      // add this back when we want tests
      // {
      //   type: 'add',
      //   path: '../../{{path}}/{{kebabCase name}}/tests/index.spec.tsx',
      //   templateFile: `${componentTemplate}/test.js.hbs`,
      //   abortOnFail: true,
      // },
    ];

    // If want index.stories.js to develop the component
    if (data.wantStorybook) {
      actions.push({
        type: "add",
        path: "../../{{path}}/{{kebabCase name}}/index.stories.tsx",
        templateFile: `${componentTemplate}/storybook.js.hbs`,
        abortOnFail: true
      });
    }

    return actions;
  }
};
