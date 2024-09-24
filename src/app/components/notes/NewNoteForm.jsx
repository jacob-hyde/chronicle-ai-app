"use client";
import { useForm } from "react-hook-form";
import SelectInput from "../inputs/SelectInput";
import { forwardRef } from "react";
import TextAreaInput from "../inputs/TextAreaInput";
import AutoCompleteInput from "../inputs/AutoCompleteInput";
import { useSelector } from "react-redux";
import { addUserTag } from "../../services/ApiService";

function NewNoteForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      project: "",
      tags: [],
    },
    mode: "all",
  });

  const projects = useSelector((state) => state.projects.active);
  const tags = useSelector((state) => state.user.tags);

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex align-center justify-between pb-4">
        <div className="sm:w-1/3 w-full">
          <SelectInput
            control={control}
            name="project"
            label="Project"
            options={projects.map((project) => ({
              name: project.name,
              value: project.id,
            }))}
          />
        </div>
        <div className="sm:w-1/3 w-full">
          <AutoCompleteInput
            control={control}
            name="tags"
            label="Tags"
            multiple
            chips
            options={tags.map((tag) => ({
              name: tag.name,
              value: tag.id,
            }))}
            onAdd={addUserTag}
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
