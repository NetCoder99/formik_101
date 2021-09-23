import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import classes from "./ProductReviewForm.module.css";

const ProductReviewForm = () => {
  const products = ["Product 1", "Product 2", "Product 3", "Product 4"];

  const productOptions = products.map((product, key) => (
    <option value={product} key={key}>
      {product}
    </option>
  ));

  const validationSchema = Yup.object({
    product: Yup.string().required("Please select a product").oneOf(products),
    name: Yup.string().required(),
    email: Yup.string().email().required(),
  });

  const initialValues = {
    _type: "productReview",
    name: "",
    email: "",
    product: "",
  };

  const handleProductChange = (event: any) => {
    if (event.target?.name === "product") {
      console.log("handleProductChange.index:" + event.target?.options?.selectedIndex);
    } else {
      console.log("handleProductChange.name:" + event.target?.name);
    }
  };

  const onSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };

  const renderError = (message: string) => (
    <span className="help invalid">{message}</span>
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
      <Form
        className={classes.ProductReviewForm}
        onChange={handleProductChange}
      >
        <div className="container">
          <div className={classes.field}>
            <label className="label" htmlFor="product">
              Product
            </label>
            <Field id="product" name="product" as="select">
              <option value={""}>Select a product</option>
              {productOptions}
            </Field>
            <ErrorMessage className="invalid" name="product" render={renderError} />
          </div>
        </div>
        <div className="container">
          <div className={classes.field}>
            <label className="label" htmlFor="name">
              Full name
            </label>
            <Field
              name="name"
              type="text"
              className="input"
              placeholder="Full name"
            />
            <ErrorMessage
              className={"invalid"}
              name="name"
              render={renderError}
            />
          </div>
          <div className={classes.field}>
            <label className="label" htmlFor="email">
              Email address
            </label>
            <Field
              name="email"
              type="text"
              className="input"
              placeholder="Email address"
            />
            <ErrorMessage
              className="invalid"
              name="email"
              render={renderError}
            />
          </div>
        </div>
        <br />
        <div className={classes.field}>
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ProductReviewForm;
