import React from "react";
import { useFormik } from "formik";
import classes from "./SignupForm.module.css";
import AppInput from "../common/AppInput";
import { SignUpValidate, validateLastName } from "./SignUpValidate";
import * as Yup from "yup";
import { validateSignUpForm } from "./SignUpFormValidate";

// interface errorsObj {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// const validateSignUpForm = Yup.object({
//   firstName: Yup.string().required('First name is required.'),
//   lastName: Yup.string().required('Last name is required.'),
//   email: Yup.string().required('Last name is required.'),
//  });

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      firstName: "john",
      lastName: "smith",
      email: "anon@nowhere.com",
    },
    validationSchema: validateSignUpForm,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="card">
          <div>
            <AppInput
              inputId="firstName"
              labelText="First Name:"
              onChangeHandler={formik.handleChange}
              initValue={formik.values.firstName}
              inputClass={formik.errors.firstName && "error-input"}
            />
            <AppInput
              inputId="lastName"
              labelText="Last Name:"
              onChangeHandler={formik.handleChange}
              initValue={formik.values.lastName}
              inputClass={formik.errors.lastName && "error-input"}
            />
            <AppInput
              inputId="email"
              labelText="Email:"
              onChangeHandler={formik.handleChange}
              initValue={formik.values.email}
              inputClass={formik.errors.email && "error-input"}
            />
          </div>
          <div className="break"></div>          

          <div className="box-outer">
              <label>test1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</label>
              <div className="box-end">
              <button type="submit">Submit</button>
              </div>
          </div>

        </div>
      </form>
    </>
  );
};
export default SignupForm;
