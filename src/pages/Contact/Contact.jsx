import Footer from "../../Components/Footer/Footer";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="contact__page">
      <div className="form__box">
        <h1>Contact me</h1>
        <p>Hi there, contact me to ask about anything you have in mind.</p>
        <Form />
      </div>
      <Footer className="contact__footer" />
    </div>
  );
};
export default Contact;
