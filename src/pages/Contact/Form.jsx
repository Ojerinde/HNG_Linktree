import { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

const Form = (props) => {
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    email: "",
    message: "",
    lastNameIsValid: false,
    firstNameIsValid: false,
    emailIsValid: false,
    messageIsValid: false,
    lastNameIsFocus: false,
    firstNameIsFocus: false,
    emailIsFocus: false,
    messageIsFocus: false,
    formIsValid: false,
  });

  const lastNameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, lastName: e.target.value };
    });

    if (form.lastName.length >= 3) {
      setForm((prev) => {
        return { ...prev, lastNameIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, lastNameIsValid: false };
      });
    }
  };

  const firstNameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, firstName: e.target.value };
    });

    if (form.firstName.length >= 3) {
      setForm((prev) => {
        return { ...prev, firstNameIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, firstNameIsValid: false };
      });
    }
  };

  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value };
    });

    if (form.email.includes("@")) {
      setForm((prev) => {
        return { ...prev, emailIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, emailIsValid: false };
      });
    }
  };

  const messageOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, message: e.target.value };
    });

    if (form.message.length > 0) {
      setForm((prev) => {
        return { ...prev, messageIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, messageIsValid: false };
      });
    }

    const { emailIsValid, lastNameIsValid, firstNameIsValid, messageIsValid } =
      form;

    if (emailIsValid && lastNameIsValid && firstNameIsValid && messageIsValid) {
      setForm((prev) => {
        return { ...prev, formIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, formIsValid: false };
      });
    }
  };

  // Allowing the user to unfocus the input field before checking if the input field is correct
  const lastNameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, lastNameIsFocus: true };
    });
  };

  const firstNameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, firstNameIsFocus: true };
    });
  };

  const emailOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, emailIsFocus: true };
    });
  };

  const messageOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, messageIsFocus: true };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className="contact__form" onSubmit={submitHandler}>
      <div className="contact__form--box">
        <div>
          <Input
            id="first_name"
            label="First Name"
            type="text"
            invalid={
              !form.firstNameIsValid && form.firstNameIsFocus ? "invalid" : ""
            }
            placeholder="Enter your first name"
            value={form.firstName}
            onChange={firstNameOnChangeHandler}
            onBlur={firstNameOnBlurHandler}
          />
          {form.firstNameIsFocus && !form.firstNameIsValid && (
            <pre className="invalid__input">
              Enter a name of length 4 or above
            </pre>
          )}
        </div>
        <div>
          <Input
            id="last_name"
            label="Last Name"
            type="text"
            invalid={
              !form.lastNameIsValid && form.lastNameIsFocus ? "invalid" : ""
            }
            placeholder="Enter your last name"
            value={form.lastName}
            onChange={lastNameOnChangeHandler}
            onBlur={lastNameOnBlurHandler}
          />
          {form.lastNameIsFocus && !form.lastNameIsValid && (
            <pre className="invalid__input">
              Enter a name of length 4 or above
            </pre>
          )}
        </div>
      </div>
      <Input
        id="email"
        label="Email Address"
        type="email"
        invalid={!form.emailIsValid && form.emailIsFocus ? "invalid" : ""}
        placeholder="Enter your email"
        value={form.email}
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
      />
      {form.emailIsFocus && !form.emailIsValid && (
        <pre className="invalid__input">
          Please enter an email with @ symbol
        </pre>
      )}

      <Input
        id="message"
        label="Message"
        type="text"
        field="textarea"
        invalid={!form.messageIsValid && form.messageIsFocus ? "invalid" : ""}
        placeholder="Send me a message and I will reply you as soon as possible"
        value={form.message}
        onChange={messageOnChangeHandler}
        onBlur={messageOnBlurHandler}
      />
      {form.messageIsFocus && !form.messageIsValid && (
        <pre className="invalid__input">Please enter a message</pre>
      )}

      <div className="checkbox">
        <input type="checkbox" name="checkbox" value="value" id="checkbox" />
        <label htmlFor="checkbox">
          You agree to provide your data to Hng who may contact you.
        </label>
      </div>

      <Button id="btn__submit" type="submit" disabled={!form.formIsValid}>
        Send message
      </Button>
    </form>
  );
};
export default Form;
