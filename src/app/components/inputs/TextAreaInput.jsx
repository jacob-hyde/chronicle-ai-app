import { FormControl, TextareaAutosize } from "@mui/material";
import { useController, useForm } from "react-hook-form";

export default function TextAreaInput({ control, name, placeholder, minRows = 4 }) {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <FormControl className="w-full">
      <TextareaAutosize
        variant="outlined"
        onChange={field.onChange} // send value to hook form
        onBlur={field.onBlur} // notify when input is touched/blur
        value={field.value || ""} // input value
        name={field.name} // send down thef input name
        placeholder={placeholder} // input label
        // helperText={invalid && isTouched ? `${label} is required` : false} // error message
        minRows={minRows}
      />
    </FormControl>
  );
}
