import React from "react";
import { useFormik } from "formik";
import classes from "./SignupForm.module.css";
import AppInput from "../common/AppInput";
import { SignUpValidate, validateLastName } from "./SignUpValidate";
import * as Yup from 'yup';


interface errorsObj {
  firstName: string;
  lastName: string;
  email: string;
}
const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const validationPageOne = Yup.object({
    lastName: Yup.string().required('Last name is required.')
   })

  const formik = useFormik({
    initialValues: {
      firstName: "john",
      lastName: "smith",
      email: "anon@nowhere.com",
    },
    //validateOnBlur: SignUpValidate
    validate() {
      const errors: errorsObj = {
        firstName: "",
        lastName: "",
        email: "",
      };
      if (formik.touched.email && !formik.values.email) {
        console.log("formik.touched.email");
        errors.email = "Email is Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    //SignUpValidate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <AppInput
          inputId="firstName"
          labelText="First Name:"
          onChangeHandler={formik.handleChange}
          initValue={formik.values.firstName}
        />

        <AppInput
          inputId="lastName"
          labelText="Last Name:"
          onChangeHandler={formik.handleChange}
          initValue={formik.values.lastName}
        />
        {!formik.errors.lastName && <span>LastName Ok</span>}
        {formik.errors.lastName}

        <AppInput
          inputId="email"
          labelText="Email:"
          onChangeHandler={formik.handleChange}
          initValue={formik.values.email}
        />
        {!formik.errors.email && <span>Email Ok</span>}
        {formik.errors.email}

        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default SignupForm;
