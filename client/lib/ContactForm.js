"use strict";

import React from "react";
import ReactDOM from "react-dom";
const _ = require("underscore");

const FormInput = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    focus: React.PropTypes.bool,
    error: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    textarea: React.PropTypes.bool
  },
  componentDidMount: function(){
    if (this.props.focus) {
      var input = this.props.textarea ? this.refs.textarea : this.refs.input;
      ReactDOM.findDOMNode(input).focus();
    }
  },
  render: function() {
    return <div className="form_row">
      <div className="label">{this.props.label}</div>
      {this.props.textarea ?
        (<textarea
          value={this.props.value}
          ref="textarea"
          className={"form_input " + (this.props.error ? "invalid" : "")}
          onChange={e => this.props.onChange(e)}
        />) :
        (<input
          value={this.props.value}
          ref="input"
          className={"form_input " + (this.props.error ? "invalid" : "")}
          onChange={e => this.props.onChange(e)}
        />)
      }
      <div className="error">{this.props.error}</div>
    </div>;
  }
});

const ContactForm = React.createClass({
  propTypes: {
    subject: React.PropTypes.string
  },
  getInitialState: () => ({
    name: {
      value: "",
      error: ""
    },
    email: {
      value: "",
      error: ""
    },
    subject: {
      value: "",
      error: ""
    },
    message: {
      value: "",
      error: ""
    }
  }),
  render: function() {
    return <div className="contact-form">
        <form
          onSubmit={e => {
            e.preventDefault();
            var updatedState = findErrors(this.state);
            this.setState(updatedState);
          }}>
        <FormInput
          label="Name"
          value={this.state.name.value}
          error={this.state.name.error}
          focus={!!this.props.subject}
          onChange={e => this.setState({
            name: {
              value: e.target.value,
              error: ""
            }
          })}
        />
        <FormInput
          label="Email"
          value={this.state.email.value}
          error={this.state.email.error}
          onChange={e => this.setState({
            email: {
              value: e.target.value,
              error: ""
            }
          })}
        />
        <FormInput
          label="Subject / Product of interest"
          value={this.state.subject.value || this.props.subject}
          error={this.state.subject.error}
          onChange={e => this.setState({
            subject: {
              value: e.target.value,
              error: ""
            }
          })}
        />
        <FormInput
          label="Message (include application & desired quantity)"
          value={this.state.message.value}
          error={this.state.message.error}
          onChange={e => this.setState({
            message: {
              value: e.target.value,
              error: ""
            }
          })}
          textarea={true}
        />
        <button type="submit" className="form_submit" >SEND</button>
      </form>
    </div>;
  }
});

function findErrors(state) {
  _.forEach(state, (data, key) => {
    if (!data.value) {
      switch (key) {
      case "name":
        data.error = "Enter your name";
        break;
      case "email":
        data.error = "Enter your email";
        break;
      case "subject":
        data.error = "Enter a subject or a product";
        break;
      case "message":
        data.error = "Enter a message";
        break;
      }
    }
  });
  var validEmail = validateEmail(state.email.value);
  if (!validEmail) {
    state.email.error = "Enter a valid email";
  }
  if (_.every(state, data => !data.error)) {
    console.warn("SUBMITTING", state);
  } else {
    console.warn("ERROR", state);
  }
  return state;
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

module.exports = ContactForm;
