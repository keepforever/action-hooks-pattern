import React from "react";
import Counter from './comps/Counter'

import store from "./store";

export default ( ) => {
  return (
    <store.Provider initialValue={{count: 0}}>
      <Counter />
    </store.Provider>
  )
};
