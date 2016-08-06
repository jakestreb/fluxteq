"use strict";

import { Router, Route, Link, browserHistory } from "react-router";
import React from "react";
import ReactDOM from "react-dom";
const _ = require("underscore");
const ContactForm = require("./ContactForm.js");

const distributors = [{
  region: "North America (Main Office)",
  title: "FluxTeq LLC",
  address: "1800 Founders Drive",
  secondary: "Suite 109",
  city: "Blacksburg, VA 24060-6370",
  phone: "+1-434-987-3528",
  email: "info@fluxteq.com"
}, {
  region: "Canada",
  title: "SMT Research Ltd.",
  address: "158-628 East Kent Ave South",
  city: "Vancouver, BC, V5X0B2",
  phone: "+1-778-373-2071",
  email: "gamal@smtresearch.ca"
}, {
  region: "Europe",
  title: "Sequoia Technology Ltd.",
  address: "Basingstroke Road, Spencers Wood",
  city: "Reading, RG7 1PW, UK",
  phone: "+44 (0) 118-976-9016",
  email: "john.culver@sequoia.co.uk"
}, {
  region: "Japan",
  title: "Sensortechnos, Inc.",
  address: "3-24-17 Nishiazabu, Minatoku",
  city: "Tokyo 106-0031 Japan",
  phone: "+81 (0) 35-785-2424",
  email: "senstech@td6.so-net.ne.jp"
}, {
  region: "China",
  title: "Beijing East Summit Tech. Inc.",
  address: "Huixinyuan, Huixinxijie",
  city: "Chaoyang Dist. Beijing, China",
  phone: "+86 (0) 10-6481-2852",
  email: "john@eastsummit.net"
}, {
  region: "India",
  title: "FUSION Services N Solutions",
  address: "17/D, ONGC Road, Rai Ka Bagh",
  city: "Jodhpur, 342001",
  email: "fusionservnsol@gmail.com"
}];

const personnel = [{
  name: "Chris Cirenza",
  degree: "M.S. in Mechanical Engineering",
  role: "Co-Founder"
}, {
  name: "Rande Cherry",
  degree: "M.S. in Mechanical Engineering",
  role: "Co-Founder"
}, {
  name: "Dr. Tom Diller",
  degree: "Ph.D. in Mechanical Engineering",
  role: "Co-Founder"
}];

const Contact = React.createClass({
  render: function() {
    return <div>
      <div className="header pinned static">
        <a className="brand" href="/">
          <img className="logo" src="../../res/logo-white.png" />
          <h1 className="title">FLUXTEQ</h1>
        </a>
      </div>
      <div className="contact-holder">
        <div className="contact-advice">
          <p>Email us at <b className="focus">info@FluxTeq.com</b> or
             call us at <b className="focus">+1-434-987-3528</b> to
             place an order.</p>
        </div>
        <ContactForm />
      </div>
      <div className="personnel-header">Key Personnel</div>
      <div className="personnel">
        {personnel.map((item, i) => (
          <div key={i} className="person">
            <div className="person-row person-name">{item.name}</div>
            <div className="person-row person-degree">{item.degree}</div>
            <div className="person-row person-role">{item.role}</div>
          </div>
        ))}
      </div>
      <div className="distributors-header">Distributors</div>
      <div className="distributors">
        {distributors.map((item, i) => (
          <div key={i} className="distributor">
            <div className="dist-row dist-region">{item.region}</div>
            <div className="dist-row dist-title">{item.title}</div>
            <div className="dist-row dist-address">{item.address}</div>
            <div className="dist-row dist-secondary">{item.secondary}</div>
            <div className="dist-row dist-city">{item.city}</div>
            <div className="dist-row dist-phone">{item.phone}</div>
            <div className="dist-row dist-email">{item.email}</div>
          </div>
        ))}
      </div>
    </div>;
  }
});

module.exports = Contact;
