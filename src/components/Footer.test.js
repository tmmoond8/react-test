import React from "react";
import ReactDOM from "react-dom";
import prettyHTML from "diffable-html";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders Footer", () => {
    const el = document.createElement("div");
    ReactDOM.render(<Footer />, el);
    const outputHTML = prettyHTML(`
      <footer class="info">
        <p>Double-click to edit a todo</p>
        <p>
          Created by <a href="http://github.com/jacob-ebey/">jacob-ebey</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    `);

    expect(prettyHTML(el.innerHTML)).toBe(outputHTML);
  });
});
