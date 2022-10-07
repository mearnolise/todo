import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector, useDispatch } from "react-redux";
import { deletelist, editlist } from "../features/form/formSlice";
import "../App.css";

export default function CheckboxLabels({ todo }) {
  const { checked } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const [edited, setEdited] = useState(false);
  const [message, setMessage] = useState(todo.text);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleDelete = (e) => {
    dispatch(deletelist(todo));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const update_todo = [todo.id, message];
    dispatch(editlist(update_todo));
    setEdited(false);
  };

  return (
    <div className="flexbox-div">
      <div className="start-box">
        {edited ? (
          <form onSubmit={handleUpdate}>
            <input
              className="edit-form"
              value={message}
              onChange={handleChange}
            />
          </form>
        ) : (
          <FormControlLabel
            control={<Checkbox />}
            checked={checked}
            label={todo.text}
            onChange={handleChange}
          />
        )}
      </div>
      <div className="end-box">
        <DeleteIcon onClick={handleDelete} />
        <EditIcon
          onClick={() => {
            setEdited(!edited);
          }}
        />
      </div>
    </div>
  );
}
