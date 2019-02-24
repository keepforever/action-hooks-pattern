import React from "react";
import { Container, Button } from "../styles";

import { useIncrement, useDecrement, useCount } from "../state/count";

export default () => {
  const count = useCount()
  // useIncrement() gives us back a function that we can use
  // to update global state. Wah-lah! A custom hook!
  const increment = useIncrement();
  const decrement = useDecrement();

  console.log("Counter.js, count = ", count);
  return (
    <Container>
      <h1>count: {count}</h1>
      <Button onClick={increment}>(+) INC</Button>
      <Button onClick={decrement}>(-) DEC</Button>
    </Container>
  );
};
