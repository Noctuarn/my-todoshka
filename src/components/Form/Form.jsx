import React, { useState, useEffect, useRef } from "react";

import "./Form.scss";

export default function Form({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const hanleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="main-form">
    {edit ? (
    <div className="form edit-form">
      <input
        className="input"
        type="text"
        placeholder="Оновіть свій елемент"
        value={input}
        name="text"
        onChange={hanleChange}
        ref={inputRef}
      />

      <button onClick={handleSubmit} className="form-button edit-button">
        Оновити
      </button>
    </div>
  ) : (
    <div className="form">
      <input
        className="input"
        type="text"
        placeholder="Додайте нове завдання"
        value={input}
        name="text"
        onChange={hanleChange}
        ref={inputRef}
      />

      <button onClick={handleSubmit} className="form-button">
        Додати
      </button>
    </div>
  )}
</form>
  );
}
