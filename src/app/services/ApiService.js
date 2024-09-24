import axios from "axios";
import { store } from "../store/store";
import { addTag } from "../store/userSlice";

export const addUserTag = async (tag) => {
  const {
    data: { data },
  } = await axios.post("tags", { name: tag });
  store.dispatch(addTag(data));
};
