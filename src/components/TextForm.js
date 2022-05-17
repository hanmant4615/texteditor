import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpCase = () => {
    // console.log("clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowerCase = () => {
    // console.log("clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopy = () => {
 let search = prompt("Enter the search value");
 let replace = prompt("Enter the replace value");
 let newText = text.replaceAll(search,replace);
 setText(newText) 
}

  const Change = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("What is in your mind");
  return (
    <div>
      <h1 className="my-4">Enter the IDEA in below {props.head}</h1>

      <div className="form-group">
        <textarea
          className="form-control"
          value={text}
          onChange={Change}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "grey" : "white",
          }}
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button
          type="button"
          onClick={handleUpCase}
          className="btn btn-outline-primary  my-3"
        >
          Convert to UPPERCASE
        </button>
        <button
          type="button"
          style={{ margin: "20px" }}
          onClick={handlelowerCase}
          className="btn btn-outline-primary  my-3"
        >
          Convert to lowercase
        </button>
        <button
          type="button"
          style={{ margin: "20px" }}
          onClick={handleCopy}
          className="btn btn-outline-primary  my-3"
        >
          Replace All Occurrence
        </button>
      </div>
    </div>
  );
}
