import React from "react";
import { Label } from "../components/Label";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Label",
  decorators: [withKnobs],
};

export const primary = () => {
  const outlined = boolean("Oultined", false);
  return <Label className="" text="label text" outlined={outlined} />;
};
