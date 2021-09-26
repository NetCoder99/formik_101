import { useFormik } from "formik";
import classes from "./SignupFormGrid.module.css";
import AppInput from "../common/AppInput";
import { validateSignUpForm } from "./SignUpFormValidate";

const SignupFormGrid = () => {
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
        <div className={classes.wrapper}>
          <div className={classes.row1col1}>
            <AppInput
              inputId="firstName"
              labelText="First Name:"
              onChangeHandler={formik.handleChange}
              initValue={formik.values.firstName}
              inputClass={`${"width10rem"} ${
                formik.errors.firstName && "error-input"
              }`}
            />
            <AppInput
              inputId="lastName"
              labelText="Last Name:"
              onChangeHandler={formik.handleChange}
              initValue={formik.values.lastName}
              inputClass={`${"width15rem"} ${
                formik.errors.lastName && "error-input"
              }`}
            />
          </div>
          <div className={classes.row1col2}>
            <AppInput
              inputId="email"
              labelText="Email:"
              onChangeHandler={formik.handleChange}
              initValue={formik.values.email}
              inputClass={formik.errors.email && "error-input"}
            />
          </div>

          <div className={classes.row1col2}>
            <AppInput
              inputId="email"
              labelText="Email:"
              onChangeHandler={formik.handleChange}
              initValue={formik.values.email}
              inputClass={formik.errors.email && "error-input"}
            />
          </div>
          <hr />
          <div className={classes.row2col1}>
            <label>test1XXXXXXXXXXXXXXXXXXXX</label>
          </div>
          <div className={`${classes.row2col2}`}>
            <button className={classes.floatRight} type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default SignupFormGrid;
