import React from "react";
import Counter from "./comps/Counter";
import store from "./store";

export default () => {
  const { Provider } = store;
  return (
    <Provider initialValue={{ count: 0 }}>
      <Counter />
    </Provider>
  );
};
