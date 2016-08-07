"use strict";

import { Router, Route, IndexRoute, Link, browserHistory } from "react-router";
import React from "react";
import ReactDOM from "react-dom";
import Icons from "./Icons.js";

const applications = [{
  name: "Thermal monitoring of buildings",
  url: "buildings",
  icon: "Shop",
  desc: "Heat flux sensors can be placed on windows and walls to determine where heat is being \
    lost at certain times of the day and in certain weather conditions. \
    For example, if there is wind or rain hitting a building from a certain direction, this will \
    cause an increased amount of heat transfer on the building's side that is exposed to these \
    conditions. \
    Placing heat flux sensors at various locations within a building can help determine where \
    heat is being lost/gained so that heating or cooling loads can be directed to specific zones \
    of buildings to save energy."
}, {
  name: "Thermal properties of materials",
  url: "materials",
  icon: "Layers",
  desc: "Knowledge of the thermal properties of certain materials is essential for a wide variety \
    of applications. Heat flux sensors can be used in conjunction with temperature sensors, either \
    separately packaged or built-in, to determine thermal properties of materials such as thermal \
    conductivity (k) or thermal insulation resistance (R\" or R-value). Use heat flux and temperature \
    sensors together to measure R-values/ U-values of insulation, windows, and other materials."
}, {
  name: "Non-Invasive Flow Measurement",
  icon: "Transfer",
  desc: "Heat flux sensors have been proven to work as flow meter’s to non-invasively determine the \
    velocity of internal fluid flow. With flow velocity and other flow characteristics, BTU metering \
    information can also be calculated."
}, {
  name: "Wearable technology",
  icon: "Watch",
  desc: "The direct measurement of heat flux is the most accurate method to estimate calories burned. \
    The body responds differently with different exercises and in different climate conditions. \
    Heat flux sensors can help to constantly keep track of how much heat, or essentially calories, \
    a body is losing in such conditions."
}, {
  name: "Medical Diagnostics",
  icon: "Heart",
  desc: "The heat flux sensors have been used in various systems to measure blood perfusion, or \
    blood flow to skin tissue. These systems could be used for a wide range of applications \
    including bedsore monitoring and prevention therapy, organ transplant preservation, skin cancer \
    detection and burned tissue severity evaluation. FluxTeq has begun development of such systems \
    and hope to commercialize them in the near future. Contact us if you are interested in \
    participating in a collaborative research effort to do so."
}, {
  name: "Education",
  url: "education",
  icon: "Networking",
  desc: "It should come to you as a surprise that heat transfer educational classes are taught to \
    engineering students all across the United States without the students ever learning the \
    difference between heat and temperature. FluxTeq has determined that the lack of hands-on \
    experience with basic thermal conditions can cause students to confuse underlying concepts \
    in the subject of heat transfer. \
    FluxTeq has designed and implemented heat transfer workshops that have been used by hundreds \
    of engineering students. These workshops use both heat flux and temperature sensors in a variety \
    of experimental situations to help the students learn the fundamentals of heat transfer hands-on."
}];

// const Buildings = React.createClass({

// });

// const Materials = React.createClass({

// });

// const Education = React.createClass({

// });

const Application = React.createClass({
  render: function() {
    return null;
  }
});

const Preview = React.createClass({
  propTypes: {
    application: React.PropTypes.object.isRequired
  },
  buildLink: function() {
    var url = this.props.application.url;
    if (url) {
      return <Link className="more-info inline-link" to={`/applications/${url}`}>
        Learn more<p className="arrow">>></p>
      </Link>;
    } else {
      return null;
    }
  },
  render: function() {
    var application = this.props.application;
    var Icon = Icons[application.icon];
    return <div className="application">
      <div className="application-info">
        <div className="application-header">
          <Icon />
          <h2 className="application-name">{application.name}</h2>
        </div>
        <div className="application-desc">{application.desc}</div>
        {this.buildLink()}
      </div>
    </div>;
  }
});

const Applications = React.createClass({
  render: function() {
    return <div>
      <div className="applications-list">
        {applications.map((item, i) => (
          <Preview
            key={i}
            application={item}
          />
        ))}
      </div>
    </div>;
  }
});

exports.Application = Application;
exports.Applications = Applications;
