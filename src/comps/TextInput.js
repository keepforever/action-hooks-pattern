import React from "react";
import { Input } from "../styles";

import { useText, useChangeText } from "../state/input";

export default () => {

  const text = useText();
  const changeText = useChangeText();

  console.log('TextInput, text = ', text, '\n' )

  return (
      <Input
        onChange={(e) => {
          console.log('e.target.value = ', e.target.value, '\n' )
          changeText(e.target.value)}}
        value={text}
        type="text"
      />
  );
};
