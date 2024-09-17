"use client";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Chip,
} from "@mui/material";
import { useController } from "react-hook-form";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectInput({
  control,
  name,
  options,
  label,
  multiple,
  chips,
}) {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
  });

  if (chips) {
    return (
      <FormControl className="w-full">
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <Select
          variant="outlined"
          onChange={field.onChange} // send value to hook form
          onBlur={field.onBlur} // notify when input is touched/blur
          value={field.value || []} // input value
          name={field.name} // send down thef input name
          label={label} // input label
          inputRef={field.ref} // send input ref, so we can focus on input when error appear
          error={invalid && isTouched} // show error when input is touched
          // helperText={invalid && isTouched ? `${label} is required` : false} // error message
          multiple={multiple}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={options.filter((v) => v.value === value)[0].name}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return (
    <FormControl className="w-full">
      <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
      <Select
        variant="outlined"
        onChange={field.onChange} // send value to hook form
        onBlur={field.onBlur} // notify when input is touched/blur
        value={field.value || ""} // input value
        name={field.name} // send down thef input name
        label={label} // input label
        inputRef={field.ref} // send input ref, so we can focus on input when error appear
        error={invalid && isTouched} // show error when input is touched
        // helperText={invalid && isTouched ? `${label} is required` : false} // error message
        multiple={multiple}
        // renderValue={(selected) => ({ selected })}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
