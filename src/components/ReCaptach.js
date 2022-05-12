import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const ReCaptach = () => {
  const [verfied, setVerifed] = useState(false);

  //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 mt-4">
      <h1 className="mb-3">Re Captach Tutorial</h1>
      <form>
        <div className="mb-3" style={{ width: 500 }}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />

        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={!verfied}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReCaptach;
