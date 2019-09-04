import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Contacts.css";
import ContactsCard from './ContactsCard';
import placeholder from "../assets/images/placeholder-images-image_large.png";

const Contacts = () => {

    return (
        <div className="container">
      <row>
        <h4 className="contactsTitle">Meet The Crew</h4>
        <br></br>
        <h6 className="projectsDesc">
          Get to know the crazies that make up our family at this here nut house!
        </h6>
      </row>
      <div className="row">
        <div className="col">
          <ContactsCard
            name="Alfred Zepeda"
            placeholder={placeholder}
            bio="Aliqua duis commodo velit dolor nulla Lorem culpa consequat voluptate irure veniam exercitation officia excepteur."
            email="email@email.com"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactsCard
            name="DeAnn Hinojosa"
            placeholder={placeholder}
            bio="Aliqua duis commodo velit dolor nulla Lorem culpa consequat voluptate irure veniam exercitation officia excepteur."
            email="email@email.com"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactsCard
            name="John Belciglio"
            placeholder={placeholder}
            bio="Aliqua duis commodo velit dolor nulla Lorem culpa consequat voluptate irure veniam exercitation officia excepteur."
            email="email@email.com"
          />
        </div>
      </div>
    </div>
    );
}

export default Contacts;