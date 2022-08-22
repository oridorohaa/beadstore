// import "./form-input.styles.jsx";

import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {/* if the length value of the input is true, we want to the input placeholder to shrink */}
      <Input {...otherProps} />
      <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
    </Group>
  );
};

export default FormInput;
