import { useRef } from "react";

import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Input/Input";

const Contact = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact__page">
      <div className="form__box">
        <h1>Contact me</h1>
        <p>Hi there, contact me to ask about anything you have in mind.</p>
        <form className="contact__form" onSubmit={submitHandler}>
          <div className="contact__form--box">
            <Input
              id="first_name"
              label="First Name"
              type="text"
              ref={firstNameRef}
              placeholder="Enter your first name"
            />
            <Input
              id="last_name"
              label="Last Name"
              type="text"
              ref={lastNameRef}
              placeholder="Enter your last name"
            />
          </div>
          <Input
            id="email"
            label="Email Address"
            type="email"
            ref={emailRef}
            placeholder="Enter your email"
          />
          <Input
            id="message"
            label="Message"
            ref={messageRef}
            type="text"
            field="textarea"
            placeholder="Send me a message and I will reply you as soon as possible"
          />

          <div className="checkbox">
            <input type="checkbox" name="checkbox" value="value" id="checkbox"/>
            <label htmlFor="checkbox">
              You agree to provide your data to Hng who may contact you.
            </label>
          </div>

          <Button id="btn__submit" type="submit">
            Send message
          </Button>
        </form>
      </div>
      <Footer className="contact__footer" />
    </div>
  );
};
export default Contact;
