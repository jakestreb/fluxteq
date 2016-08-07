"use strict";

import { Router, Route, IndexRoute, Link, browserHistory } from "react-router";
import React from "react";
import ReactDOM from "react-dom";
import { Tag, Invoice } from "./Icons.js";
import _ from "underscore";

const products = [{
  name: "FluxDAQ",
  subtitle: "Heat flux sensor and thermocouple measurement system",
  desc: "The FluxDAQ is an Arduino based signal measurement system that can \
    be used for accurately measuring and recording precise analog voltage signals \
    from FluxTeq's heat flux/thermocouple thermal sensors. With 8 high resolution \
    differential voltage input channels, the FluxDAQ is not only an inexpensive data \
    acquisition system but also one of a few systems on the market that can accurately \
    precisely resolve heat flux sensor and thermocouple output signals. \
    Each complete PHFS heat flux sensor package includes an integrated thermocouple \
    which requires 2 differential channels total for each sensor that is simultaneously \
    measuring both heat flux and temperature signals. Therefore, the FluxDAQ can handle \
    up to 4 complete PHFS sensors that are measuring both heat flux and temperature.\
    The necessary software to operate the FluxDAQ for your computer, which includes a \
    real-time graphical user interface, is included with every FluxDAQ data reader \
    purchase free of charge.",
  price: 300,
  table: {
    "Input Signal Type": "Heat flux sensor and Type-T thermocouple analog DC voltages",
    "Number of Channels": "8 differential (16 single-ended)",
    "Type of ADC": "24-bit Delta-Sigma",
    "Voltage Resolution": "0.122 µV",
    "Heat Flux Resolution Using PHFS-01": "Approximately 0.25 W/m^2",
    "Heat Flux Resolution Using PHFS-09": "Approximately 0.02 W/m^2",
    "Maximum Sampling Rate": "up to 2.5 Hz",
    "Standard Features": "Integrated thermistor for cold junction temperature compensation"
  },
  "table-footnotes": [
    "*Samping rate is dependent on the number of active channels taking measurements. \
    The specified maximum sampling rate is for 2 active differential channels (1 heat flux & 1 thermocouple)",
    "**Dimensions of FluxDAQ USB interface measurement system in an acrylic enclosure \
    that is built to house the FluxDAQ with all the optional additional features"
  ],
  image: "/res/reader.jpg"
}, {
  name: "PHFS-01",
  subtitle: "The first low-cost, reliable heat flux sensor",
  desc: "The PHFS-01 heat flux sensor is the first low-cost, yet reliable sensor on the \
    market.  It has minimal thickness while still maintaining excellent sensitivity. \
    This sensor is recommended for permanent placement use such as long term thermal \
    monitoring of windows, walls, ducts, pipes, etc.",
  price: 50,
  table: {
    "Sensor Type":                 "Differential-Temperature Thermopile",
    "Encapsulation Material":      "Kapton (polyimide)",
    "Nominal Sensitivity":         "Approx. 4.0 mV/(W/cm^2)",
    "Sensor thickness (t)":        "260 microns",
    "Heat Flux Range":             "+/- 150 kW/m^2",
    "Temperature Range**":         "-50 to +120 degrees C",
    "Response Time*":              "0.6 Seconds",
    "Sensor Surface Thermocouple": "Type-T Thermocouple",
    "Sensing Area Dimensions":     "a = 2.54 cm; b = 2.54 cm",
    "Total Sensor Dimensions":     "W = 3.0 cm; H = 3.0 cm",
    "Sensing Area":                "6.45 cm^2",
    "Total Sensor Area":           "9.0 cm^2"
  },
  "table-footnotes": [
    "*Response time is for one time constant or 63% sensor output signal to a heat flux step input",
    "**Temperature range may be larger than specified. Further testing is currently being conducted"
  ],
  "pdf": "/res/PHFS-01.pdf",
  image: "/res/PHFS-01.png"
}, {
  name: "PHFS-01e",
  subtitle: "A robust, sensitive heat flux sensor",
  desc: "The PHFS-01e is a heat flux sensor that is encapsulated in either copper, brass, or aluminum \
    in order to make it more robust. The metal encapsulation may add a relatively small amount of \
    thickness and thermal resistance to the total sensor package, but it also allows the PHFS-01e an \
    increased sensitivity and durability. Increased durability is advantageous when the sensor is \
    required to withstand removal and reapplication to measurement surfaces multiple times throughout \
    its lifetime.",
  price: 60,
  table: {
    "Sensor Type":                      "Differential-Temperature Thermopile",
    "Encapsulation Material":           "Copper (other materials available)",
    "Nominal Sensitivity":              "Approx. 5.7 mV/(W/cm^2)",
    "Sensor thickness (t)":             "Approx. 450 microns",
    "Specific Thermal Resistance":      "Approx. 0.9 K/(kW/m^2)",
    "Absolute PHFS Thermal Resistance": "1.11 K/W",
    "Heat Flux Range":                  "+/- 150 kW/m^2",
    "Temperature Range**":              "-50 to +120 degrees C",
    "Response Time*":                   "0.9 Seconds",
    "Sensor Surface Thermocouple":      "Type-T Thermocouple",
    "Sensing Area Dimensions":          "a = 2.54 cm; b = 2.54 cm",
    "Total Sensor Dimensions":          "W = 3.0 cm; H = 3.0 cm",
    "Sensing Area":                     "6.45 cm^2",
    "Total Sensor Area":                "9.0 cm^2"
  },
  "table-footnotes": [
    "*Response time is for one time constant or 63% sensor output signal to a heat flux step input",
    "**Temperature range may be larger than specified. Further testing is currently being conducted"
  ],
  "pdf": "/res/PHFS-01e.pdf",
  image: "/res/PHFS-01e.png"
}, {
  name: "PHFS-09",
  subtitle: "The first low-cost, large surface area heat flux sensor on the market",
  desc: "The PHFS-09 is the first low-cost, large surface area sensor on the market. It has minimal \
    thickness while still maintaining excellent sensitivity.  The sensor is large enough for use in \
    building science and insulation monitoring applications.",
  price: 240,
  table: {
    "Sensor Type":                 "Differential-Temperature Thermopile",
    "Encapsulation Material":      "Kapton (polyimide)",
    "Nominal Sensitivity":         "Approx. 50 to 65 mV/(W/cm^2)",
    "Sensor thickness (t)":        "Approx. 275 microns",
    "Heat Flux Range":             "+/- 150 kW/m^2",
    "Temperature Range**":         "-50 to +120 degrees C",
    "Response Time*":              "Approx. 0.6 Seconds",
    "Sensor Surface Thermocouple": "Type-T Thermocouple",
    "Sensing Area Dimensions":     '3.45" x 3.75" (8.8 cm x 9.5 cm)'
  },
  "table-footnotes": [
    "*Response time is for one time constant or 63% sensor output signal to a heat flux step input",
    "**Temperature range may be larger than specified. Further testing is currently being conducted"
  ],
  "pdf": "/res/PHFS-09.pdf",
  image: "/res/PHFS-09.png"
}, {
  name: "PHFS-09e",
  subtitle: "The perfect heat flux sensor for wall measurements",
  desc: "The PHFS-09e is the first low-cost, large surface area sensor on the market. \
    It has minimal thickness and excellent sensitivity, perfect for wall measurements. \
    Metal foil encapsulation creates additional robustness to the sensor.",
  price: 250,
  table: {
    "Sensor Type":                  "Differential-Temperature Thermopile",
    "Encapsulation Material":       "Copper (other materials available)",
    "Nominal Sensitivity":          "Approx. 70 - 90 mV/(W/cm^2)",
    "Sensor thickness (t)":         "450 microns",
    "Heat Flux Range":              "+/- 150 kW/m^2",
    "Temperature Range**":          "-50 to +120 degrees C",
    "Response Time*":               "0.9 Seconds",
    "Sensor Surface Thermocouple":  "Type-T Thermocouple",
    "Sensing Area Dimensions":      '3.45" x 3.75" (8.8 cm x 9.5 cm)'
  },
  "table-footnotes": [
    "*Response time is for one time constant or 63% sensor output signal to a heat flux step input",
    "**Temperature range may be larger than specified. Further testing is currently being conducted"
  ],
  "pdf": "/res/PHFS-09e.pdf",
  image: "/res/PHFS-09e.png"
}, {
  name: "HTHFS-01",
  subtitle: "Extremely high temperature heat flux sensor",
  desc: "The HTHFS-01 is the first heat flux sensor on the market that is capable of withstanding \
    temperatures up to     1000 C (1800 F).  The HTHFS's thermopile is constructed entirely of robust \
    materials and placed within a high temperature inconel housing. Inconel sheathing also protects \
    the sensor's measurement leads against extreme temperatures that is experienced in harsh testing \
    environments.",
  table: {
    "Sensor Type":          "Differential-Temperature Thermopile",
    "Nominal Sensitivity":  "Approx. 300 µV/(W/cm^2)",
    "Sensor Thickness (t)": "3.175 mm",
    "Max Temperature":      "Up to 1000 degrees C",
    "Thermocouple Type":    "Type-K Thermocouple",
    "Sensing Area Size":    "9.8 mm x 5.7 mm"
  },
  "table-footnotes": [
    "*Temperature range may be larger than specified"
  ],
  "pdf": "/res/HTHFS-01.pdf",
  image: "/res/HTHFS-01.png"
}, {
  name: "Sensor Calibration",
  subtitle: "We offer calibration",
  desc: "We have the capabilities to calibrate our heat flux sensors with both radiation and \
    conduction calibration systems. Do you have a heat flux sensor that you're unsure is \
    accurately calibrated? Inquire about our calibration services.",
  image: "/res/radiation.jpg"
}];

const Datasheet = React.createClass({
  render: function() {
    if (this.props.value) {
      return (<div className="product-row product-datasheet">
        <Invoice />
        <a className="tagline" href={this.props.value} target="_blank">View Datasheet</a>
      </div>);
    } else {
      return null;
    }
  }
});

const Price = React.createClass({
  render: function() {
    if (this.props.value) {
      return (<div className="product-row product-price">
        <Tag />
        <p className="tagline">{"Starting at $" + this.props.value}</p>
      </div>);
    } else {
      return null;
    }
  }
});

const Product = React.createClass({
  render: function() {
    var product = _.find(products, product => product.name === this.props.params.name);
    var table = null;
    if (product.table) {
      table = (<div className="product-table-box">
        <div className="product-table-header">Specifications</div>
        <table className="product-table">
          <tbody>
            {_.map(product.table, (tableItem, key) => (
              <tr key={key} className="table-row">
                <td>{key}</td>
                <td>{tableItem}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="product-table-footnotes">
          {product["table-footnotes"].map((footnote, i) => (
            <div key={i} className="product-table-footnote">{footnote}</div>
          ))}
        </div>
      </div>);
    }
    return <div className="product-page">
      <div className="product-page-nav">
        <Link className="back inline-link" to="/products">
          <p className="back-arrow">&lt;&lt;</p>Back to products
        </Link>
        <Link className="nav-inquiry inline-link"
              to={`/contact/${product.name}`}
              onClick={() => window.scrollTo(0, 0)}>
          Request an order<p className="arrow">>></p>
        </Link>
      </div>
      <div className="product-main-row">
        <div className="product-info">
          <div className="product-name"><h2>{product.name}</h2></div>
          <div className="product-desc">{product.desc}</div>
          <Price value={product.price} />
          <Datasheet value={product.pdf} />
        </div>
        {product.image ? <img className={"product-image " + product.name} src={product.image} /> : null}
      </div>
      {table}
    </div>;
  }
});

const Preview = React.createClass({
  propTypes: {
    product: React.PropTypes.object.isRequired
  },
  render: function() {
    var product = this.props.product;
    return <div className="product">
      <div className="product-info">
        <div className="product-row product-name"><h2>{product.name}</h2></div>
        <div className="product-row product-subtitle">{product.subtitle}</div>
          <Price value={product.price} />
          <Datasheet value={product.pdf} />
        <ul className="links-list">
          <li>
            <Link className="more-info inline-link" to={`/products/${product.name}`}>
              More information<p className="arrow">>></p>
            </Link>
          </li>
          <li>
            <Link className="inquiry inline-link"
                  to={`/contact/${product.name}`}
                  onClick={() => window.scrollTo(0, 0)}>
              Request an order<p className="arrow">>></p>
            </Link>
          </li>
        </ul>
      </div>
      {product.image ? <img className={"product-image " + product.name} src={product.image} /> : null}
    </div>;
  }
});

const Products = React.createClass({
  render: function() {
    return <div>
      <div className="products-list">
        {products.map((product, i) => (
          <Preview
            key={i}
            product={product}
          />
        ))}
      </div>
      <div className="bulk-products">
        <img className="sensor-icon sensor-icon-05" src="/res/Dark_0.5.png" />
        <img className="sensor-icon sensor-icon-1" src="/res/Light_1.png" />
        <img className="sensor-icon sensor-icon-4" src="/res/Light_4.png" />
        <img className="sensor-icon sensor-icon-05" src="/res/Light_0.5.png" />
        <img className="sensor-icon sensor-icon-1" src="/res/Dark_1.png" />
        <img className="sensor-icon sensor-icon-05" src="/res/Light_0.5.png" />
        <div className="bulk-products-summary">
          All products are eligible for bulk discounts
        </div>
        <img className="sensor-icon sensor-icon-05" src="/res/Dark_0.5.png" />
        <img className="sensor-icon sensor-icon-1" src="/res/Light_1.png" />
        <img className="sensor-icon sensor-icon-05" src="/res/Light_0.5.png" />
        <img className="sensor-icon sensor-icon-1" src="/res/Dark_1.png" />
        <img className="sensor-icon sensor-icon-4" src="/res/Dark_4.png" />
        <img className="sensor-icon sensor-icon-05" src="/res/Dark_0.5.png" />
      </div>
    </div>;
  }
});

exports.Product = Product;
exports.Products = Products;
