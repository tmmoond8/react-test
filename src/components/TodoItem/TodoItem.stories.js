import React from "react";
import TodoItem from "./TodoItem";

export default {
  title: "TodoItem",
  component: TodoItem,
};

export const Default = () => {
  return (
    <li class="todo-list" style={{ background: "white" }}>
      <TodoItem
        todo={{
          id: 1,
          label: "Have a Breakfast",
          done: false,
        }}
      />
    </li>
  );
};

export const Done = () => {
  return (
    <li class="todo-list" style={{ background: "white" }}>
      <TodoItem
        todo={{
          id: 1,
          label: "Have a Breakfast",
          done: true,
        }}
      />
    </li>
  );
};
