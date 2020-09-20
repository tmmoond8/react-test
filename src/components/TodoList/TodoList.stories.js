import React from "react";
import { HashRouter, Route } from "react-router-dom";

import TodoList from "./TodoList";

export default {
  title: "TodoList",
  component: TodoList,
};

export const Default = () => {
  return (
    <HashRouter>
      <React.Fragment>
        <div className="todoapp">
          <Route path="/:filter?" component={TodoList} />
        </div>
      </React.Fragment>
    </HashRouter>
  );
};
