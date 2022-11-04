import { useRef } from "react";

import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

const Contact = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  return (
    <form className="contact__form">
      <Input id="first_name" label="First Name" ref={firstNameRef} />
      <Input id="last_name" label="Last Name" ref={lastNameRef} />
      <Input id="email" label="Email Address" ref={emailRef} />
      <Input id="message" label="Message" ref={messageRef} field="textarea" />
      <Button id="btn__submit">Submit</Button>
    </form>
  );
};
export default Contact;
