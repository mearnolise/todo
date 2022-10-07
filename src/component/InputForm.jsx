import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { addlist } from "../features/form/formSlice";
import { useState } from "react";

function InputForm() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const onSubmits = (e) => {
    e.preventDefault();
    if (message != "") {
      dispatch(addlist(message));
      setMessage("");
    }
  };

  return (
    <Box
      onSubmit={(e) => onSubmits(e)}
      onChange={(e) => setMessage(e.target.value)}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={message}
        id="standard-basic"
        className="form-add"
        label="todo list"
        variant="standard"
      />
    </Box>
  );
}

export default InputForm;
