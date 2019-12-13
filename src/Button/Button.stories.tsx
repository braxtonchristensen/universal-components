import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import Button from "./";
import CenterView from "../CenterView";

const withAction = (actionName: string, fn: Function) => (...args: any) => {
  action(actionName)(...args.map((a: any) => a.toString()));
  fn(...args);
};

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: Function) => <CenterView>{getStory()}</CenterView>)
  .add("playground", () => (
    <Button onPress={withAction("clicked-text", () => {})}>
      <Text>{text("Text", "I am Button")}</Text>
    </Button>
  ))
  .add("with text", () => (
    <Button onPress={withAction("clicked-text", () => {})}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add("with some emoji", () => (
    <Button onPress={withAction("clicked-emoji", () => {})}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
