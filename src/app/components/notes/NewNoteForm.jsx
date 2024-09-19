"use client";
import { useForm } from "react-hook-form";
import SelectInput from "../inputs/SelectInput";
import { forwardRef } from "react";
import TextAreaInput from "../inputs/TextAreaInput";
import AutoCompleteInput from "../inputs/AutoCompleteInput";
function NewNoteForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      project: "",
      tags: [],
    },
    mode: "all",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex align-center justify-between pb-4">
        <div className="sm:w-1/3 w-full">
          <SelectInput
            control={control}
            name="project"
            label="Project"
            options={[
              { name: "Project 1", value: "project-1" },
              { name: "Project 2", value: "project-2" },
              { name: "Project 3", value: "project-3" },
            ]}
          />
        </div>
        <div className="sm:w-1/3 w-full">
          <AutoCompleteInput
            control={control}
            name="tags"
            label="Tags"
            multiple
            chips
            options={[
              { name: "Project 1", value: "project-1" },
              { name: "Project 2", value: "project-2" },
              { name: "Project 3", value: "project-3" },
            ]}
          />
        </div>
      </div>
      <TextAreaInput control={control} name="Note" placeholder="Note..." />
      <div className="flex justify-end pt-4">
        <button type="submit" className="primary">
          Save
        </button>
      </div>
    </form>
  );
}

export default forwardRef(NewNoteForm);
