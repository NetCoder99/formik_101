import React from "react";
import "./AppInput.css";

interface Props {
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
  onBlurHandler?: React.FocusEventHandler<HTMLInputElement>;
  inputType?: string;
  labelText: string;
  inputId:  string;
  disabled?: boolean;
  labelClass?: string;
  inputClass?: string;
  ref?: React.Ref<HTMLInputElement> | null;
  initValue?: string;
}

const AppInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const tmpInputType    = props.inputType  ? props.inputType  : "text";
  const tmpLabelClass   = props.labelClass ? props.labelClass : "AppInput";
  const tmpInputClass   = props.inputClass ? props.inputClass : "AppInput";
  const tmpOnBlur       = props.onBlurHandler  ? props.onBlurHandler : () => {};

  return (
    <div className="AppInput">
      <label htmlFor="name" className={tmpLabelClass}>{props.labelText}</label>
      <input
        type={tmpInputType}
        id={props.inputId}
        className={tmpInputClass}
        onChange={props.onChangeHandler}
        onBlur={tmpOnBlur}
        ref={ref}
        value={props.initValue}
      />
    </div>
  );
});

export default AppInput;
