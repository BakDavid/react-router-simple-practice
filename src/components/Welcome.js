import React from "react";
import { Route } from "react-router-dom";

export default function Welcome() {
  return (
    <section>
      <h1>The welcome page</h1>
      <Route path="/welcome/new-user">Hello new user</Route>
    </section>
  );
}
