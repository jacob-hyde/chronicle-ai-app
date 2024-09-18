import { TextField } from "@material-ui/core";
import { FormControl, InputLabel } from "@mui/material";
import { useController, useForm } from "react-hook-form";

export default function TextInput({
  control,
  name,
  label,
  type = "text",
  schema = null,
}) {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
  });

  const errorMessage = error && error.message;

  return (
    <FormControl>
      <TextField
        variant="outlined"
        onChange={field.onChange} // send value to hook form
        onBlur={field.onBlur} // notify when input is touched/blur
        value={field.value || ""} // input value
        name={field.name} // send down thef input name
        label={label} // input label
        inputRef={field.ref} // send input ref, so we can focus on input when error appear
        error={invalid && isTouched} // show error when input is touched
        helperText={errorMessage} // error message
        type={type}
      />
    </FormControl>
  );
}
