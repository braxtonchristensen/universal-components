import React from "react";

import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";

import Input from "./";
import CenterView from "../CenterView";

storiesOf("Input", module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: Function) => <CenterView>{getStory()}</CenterView>)
  .add("playground", () => <Input />);
