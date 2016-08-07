"use strict";

import { Router, Route, IndexRoute, Link, browserHistory } from "react-router";
import React from "react";
import ReactDOM from "react-dom";
import { TweenMax, TimelineMax, Linear } from "gsap";
import ScrollMagic from "ScrollMagic";
import { Product, Products } from "./Products.js";
import { Application, Applications } from "./Applications.js";
import Contact from "./Contact.js";
import { Connection, Box, Coins, Graphic, Glasses, Checked, Wrench } from "./Icons.js";
import util from "./util.js";
import _  from "underscore";
require("../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js");

function App() {
	// Credit Card Form
  const self = this;

  // NOTE: These should be arranged in order of increasing depth.
  // The overview uses the reverse order to determine which tab is selected.
  this.nav = [{
    label: "Overview",
    text: "The first reliable, low-cost heat flux sensors on the market",
    path: "/"
  }, {
    label: "Products & Services",
    text: "Our sensors lead the market in price and quality",
    path: "/products"
  }, {
    label: "Applications",
    text: "Hundreds of applications in a variety of disciplines",
    path: "/applications"
  }];

  const Overview = React.createClass({
    componentDidMount: function() { self.initScrollMagic(); },
    render: function() {
      var path = this.props.location.pathname;
      var reversed = self.nav.slice().reverse();
      var navItem = _.find(reversed, item => util.startsWith(path, item.path));
      return <div className="home">
        <div className="header">
          <a className="brand" href="/">
            <img className="logo" src="../../res/logo-white.png" />
            <h1 className="title">FLUXTEQ</h1>
          </a>
          <Link
            className="contact"
            to={"/contact"}
            onClick={() => window.scrollTo(0, 0)}
          >
            CONTACT US
          </Link>
        </div>
        <div className={"overview " + (navItem ? navItem.label : "")} >
          <div className="blackout"></div>
          <div className="overlay">
            <div className="overlay-text">{(navItem ? navItem.text : "")}</div>
          </div>
        </div>
        <div className="content">
          <div className="nav-links">
            {self.nav.map((item, i) => (
              <Link
                key={i}
                className={"nav-link " + (navItem.path === item.path ? "active" : "inactive")}
                to={item.path}>
                  <p>{item.label}</p>
              </Link>
            ))}
          </div>
          <div className="tab-content">
            {this.props.children}
          </div>
          <div className="footer">
            <div className="footer_left">
              <p>FluxTeq reserves the right to change the specifications of their posted products
                 with the goal of providing the best instruments to their customers</p>
              <p>Icons made by
                <a href="http://www.flaticon.com/authors/gregor-cresnar"
                   className="icon-man"
                   target="_blank">Gregor Cresnar</a>
                from<a href="http://www.flaticon.com"
                       className="icon-site"
                       target="_blank">flaticon.com</a>
              </p>
            </div>
            <div className="footer_right">
              <div className="email">info@fluxteq.com</div>
              <div className="phone">+1-434-987-3528</div>
            </div>
          </div>
        </div>
      </div>;
    }
  });

  const Home = props => (
    <div>
      <div className="band product-preview">
        <div className="product-preview_left band-description">
          <h2>Quality at a competitive price</h2>
          <div className="tagline-row">
            <Checked />
            <p className="tagline">Offering the best solutions for most heat-sensing applications</p>
          </div>
          <div className="tagline-row">
            <Coins />
            <p className="tagline">The most reasonable prices in heat flux technology</p>
          </div>
          <Link className="inline-link" to={"/products"}>
            Products<p className="arrow">>></p>
          </Link>
        </div>
        <div className="product-preview_right band-image"></div>
      </div>
      <div className="band reader-preview">
        <div className="reader-preview_left band-image"></div>
        <div className="reader-preview_right band-description">
          <h2>Data acquisition made easy</h2>
          <div className="tagline-row">
            <Box />
            <p className="tagline">Arduino-based DAQ</p>
          </div>
          <div className="tagline-row">
            <Connection />
            <p className="tagline">8 differential inputs</p>
          </div>
          <div className="tagline-row">
            <Glasses />
            <p className="tagline">24-bit ADC to resolve very small heat flux signals</p>
          </div>
          <div className="tagline-row">
            <Graphic />
            <p className="tagline">Software to view real-time or recorded plots</p>
          </div>
          <Link className="inline-link" to={"/products/FluxDAQ"}>
            FluxDAQ<p className="arrow">>></p>
          </Link>
        </div>
      </div>
      <div className="band capabilities">
        <div className="capabilities_left band-description">
          <h2>Customized for your needs</h2>
          <div className="tagline-row">
            <Wrench />
            <p className="tagline">Both radiation and conduction calibration available</p>
          </div>
          <Link className="inline-link" to={"/products/calibration"}>
            Calibration<p className="arrow">>></p>
          </Link>
        </div>
        <div className="capabilities_right band-image"></div>
      </div>
    </div>
  );

  // init controller
  this.controller = new ScrollMagic.Controller();

  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Overview}>
        <IndexRoute component={Home} />
        <Route path="products" component={Products}/>
        <Route path="products/:name" component={Product}/>
        <Route path="applications" component={Applications}/>
        <Route path="applications/:name" component={Application}/>
      </Route>
      <Route path="/contact" component={Contact}/>
      <Route path="/contact/:name" component={Contact}/>
    </Router>,
    document.getElementById("main")
  );
}

App.prototype.initScrollMagic = function() {
  // Fade to black
  new ScrollMagic.Scene({duration: "70%"})
    .setTween(TweenMax.to(".blackout", 1, {opacity: 1.0, ease: Linear.easeNone}))
    .addTo(this.controller);

  // Move header up
  new ScrollMagic.Scene({triggerElement: ".nav-links", duration: 200})
    .setTween(TweenMax.to(".header", 1, {"padding": "10px 2%", width: "96%", ease: Linear.easeNone}))
    .addTo(this.controller);

  // Move up and fade center text
  new ScrollMagic.Scene({offset: 50, duration: 200})
    .setTween(TweenMax.to(".overlay-text", 1, {"padding-bottom": "100px", opacity: 0.0, ease: Linear.easeNone}))
    .addTo(this.controller);

  // Set header background to black
  var addBackground = new ScrollMagic.Scene({triggerElement: ".nav-links"})
    .setClassToggle(".header", "pinned") // add class toggle
    .addTo(this.controller);
  addBackground.triggerHook(0.2);
};

module.exports = App;
