import React from "react";
import { Switch, Route } from "react-router-dom";

// components

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Welcome from "views/welcome/Welcome";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main className="mt-15">
        <Switch>
          <Route path="/" exact component={Welcome} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}
