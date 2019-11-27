import React from "react";

// components
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";

// styles
const styles = {
  inputForm: {
    width: "300px",
    padding: "2em",
    display: "flex",
    flexDirection: "column"
  }
};

const InputForm = () => {
  return (
    <div style={styles.inputForm}>
      <Label>Artist</Label>
      <Input />
      <Label>Genre</Label>
      <Input />
      <Button>Submit</Button>
    </div>
  );
};

export default InputForm;
