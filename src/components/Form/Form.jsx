import React, { useState, useEffect, useRef } from "react";

export default function Form({onSubmit}) {
  const [input, setInput] = useState("");


    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    })

    const hanleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    }

  return (
    <form className="form">
      <input
        type="text"
        placeholder="Додайте нове завдання"
        value={input}
        name="text"
        onChange={hanleChange}
        ref={inputRef}
      />

      <button onClick={handleSubmit} className="form-button">Додати</button>
    </form>
  );
}
