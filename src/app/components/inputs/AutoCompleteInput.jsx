"use client";
import {
  FormControl,
  InputLabel,
  Box,
  Chip,
  Autocomplete,
  TextField,
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

export default function AutoCompleteInput({
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
        <Autocomplete
          onChange={(event, selectedOptions) => {
            field.onChange(selectedOptions);
          }} // send value to hook form
          freeSolo
          onBlur={field.onBlur} // notify when input is touched/blur
          value={field.value || []} // input value
          name={field.name} // send down thef input name
          multiple={multiple}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => {
              const { key, ...tagProps } = getTagProps({ index });
              return (
                <Chip
                  size="small"
                  variant="outlined"
                  label={option}
                  key={key}
                  {...tagProps}
                />
              );
            })
          }
          options={options.map((option) => option.name)}
          renderInput={(params) => <TextField {...params} label="Tags" />}
        />
      </FormControl>
    );
  }

  return (
    <FormControl className="w-full">
      <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
      <AutoComplete
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
        options={options.map((option) => option.value)}
      />
    </FormControl>
  );
}
