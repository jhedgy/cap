import { Group, FormInputLabel, Input } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
    return (
      <Group>
        <Input {...otherProps} />
        {label && (
          <FormInputLabel
            shrink={otherProps.value.length}
            className={`${otherProps.value.length > 0 ? "shrink" : ""} 
                        form-input-label`}
          >
            {label}
          </FormInputLabel>
        )}
      </Group>
    );
}

export default FormInput;