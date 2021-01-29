import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Welcome from "views/welcome/Welcome.js";
import Contact from "views/welcome/Contactus.js";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main className="mt-15">
      <Switch>
        <Route path="/welcome" exact component={Contact} />
        <Route path="/welcome/contactus" exact component={Welcome} />
        <Redirect from="/welcome" to="/" />
      </Switch>
      </main>
      <Footer />
    </>
  );
}
