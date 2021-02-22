import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Blog from "views/Blog/Blog.js";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main className="mt-15">
      <Switch>
        <Route path="/blog" component={Blog} />
      </Switch>
      </main>
      <Footer />
    </>
  );
}