import React from "react";
import { Switch, Redirect } from "react-router-dom";

import Navbar from "components/Navbars/IndexNavbar.js";
import FooterSmall from "components/Footers/Footer.js";

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import GuestRoute from "utility/GuestRoute";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png") + ")",
            }}
          ></div>
          <Switch>
          <GuestRoute path="/auth/login" exact component={Login} />
            <GuestRoute path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
        </section>
      </main>
      <FooterSmall absolute />
    </>
  );
}
