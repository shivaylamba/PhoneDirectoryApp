import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

import "./AddContact.css";

class AddContact extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      error: false,
      errorMessage: ""
    };
  }
  onChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };
  onChangePhone = event => {
    this.setState({
      phone: event.target.value
    });
  };
  addContact = event => {
    event.preventDefault();
    const phone = this.state.phone;
    if (isNaN(phone) || phone.length !== 10) {
      this.setState({
        error: true,
        errorMessage: "Enter a valid phone no."
      });
    } else {
      this.props.addContact({
        name: this.state.name,
        phone: this.state.phone
      });
    }
  };
  render() {
    let errorMessage;
    if (this.state.error) {
      errorMessage = this.state.errorMessage;
    }
    return (
      <Fragment>
        <Header>Add a contact to be added</Header>
        <div className="AddContact__container">
          <Link to="/" className="form__link">
            Go Back to Main Screen
          </Link>
          <form className="AddContact__form" onSubmit={this.addContact}>
            <div className="form__control">
              <label htmlFor="name">Add Name for Subscriber: </label>
              <input
                type="text"
                id="name"
                onChange={this.onChangeName}
                required
              />
            </div>
            <div className="form__control">
              <label htmlFor="phone">Add Phone for Subscriber: </label>
              <input
                type="text"
                id="phone"
                onChange={this.onChangePhone}
                required
              />
            </div>
            <h4 className="form__error">{errorMessage}</h4>
            <hr />
            <h3>Add the Subscriber to be added:</h3>
            <div className="form__display">
             Enter the Name of the Subscriber: <span>{this.state.name}</span>
            </div>
            <div className="form__display">
             Enter the Phone Number of the Subscriber: <span>{this.state.phone}</span>
            </div>
            <button type="submit" className="form__add">
              ADD THE CONTACT
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default AddContact;
