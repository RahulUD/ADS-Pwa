import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Welcome from "views/welcome/Welcome.js";
import Contact from "views/welcome/Contactus.js";
import Aboutus from "views/welcome/Aboutus.js";
import Fulloverlay from 'components/Overlay/Fulloverlay'
import Admission from "views/timeline/Admission";
import Faq from "views/welcome/Faq";
import Register from "views/welcome/Register";
import Holidays from "views/welcome/Holidays";
import Alumini from "views/welcome/Alumini";

function Landing() {
  return (
    <>
      <Navbar />
      <main className="mt-15">
      <Switch>
        <Route path="/welcome" exact component={Welcome} />
        <Route path="/welcome/faq" exact component={Faq} />
        <Route path="/welcome/admission" exact component={Admission} />
        <Route path="/welcome/contactus" exact component={Contact} />
        <Route path="/welcome/aboutus" exact component={Aboutus} />
        <Route path="/welcome/admission" exact component={Admission} />
        <Route path="/welcome/holidays" exact component={Holidays} />
        <Route path="/welcome/register" exact component={Register} />
        <Route path="/welcome/alumini" exact component={Alumini} />
        <Redirect from="/" to="/welcome" />
      </Switch>
      </main>
      <Footer />
      <Fulloverlay message="Loading ..."/>
    </>
  );
}
export default Landing