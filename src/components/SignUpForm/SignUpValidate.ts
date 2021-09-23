interface errorsObj  {
    firstName: string,
    lastName: string,
    email: string,
}


export function validateLastName(lastName: string)  {
  console.log("validateLastName");
  return "test";
}


export const SignUpValidate = (values: errorsObj) => {
  const errors: errorsObj = {
      firstName: '',
      lastName: '',
      email: '',
  };

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
