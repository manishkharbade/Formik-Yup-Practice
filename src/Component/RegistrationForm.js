import React from "react";
import "./Style.css";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  username: "",
  email: "",
};
const RegistrationForm = () => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log("values:", values);
      // action.resetForm();
    },
  });

  function handleResetForm() {
    resetForm();
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="field-area">
          <label htmlFor="username" className="label-input">
            Username:
          </label>
          <br />
          <input
            type="text"
            name="username"
            className="input-field"
            placeholder="Enter Name"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username ? (
            <p className="para">{errors.username}</p>
          ) : null}
        </div>

        <div className="field-area">
          <label htmlFor="email" className="label-input">
            Email:
          </label>
          <br />
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="Enter Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="para">{errors.email}</p>
          ) : null}
        </div>

        {/* <div className="field-area">
          <label htmlFor="number" className="label-input">
            Mobile Number:
          </label>
          <br />
          <input
            type="number"
            name="number"
            className="input-field"
            placeholder="Enter Contact Number"
          />
          <br />
        </div> */}

        <div className="btn-group">
          <button style={{ marginRight: "1rem" }} onClick={handleResetForm}>
            Clear
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
