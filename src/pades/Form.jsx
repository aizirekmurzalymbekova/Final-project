import React, { useContext, useState } from "react";
import { clientContext } from "../contexts/ClientContext";

const Form = () => {
  const { addForm, form } = useContext(clientContext);
  const [formUser, setFormUser] = useState("");
  const [formValue, setFormValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newForm = {
      formUser,
      formValue,
    };

    for (let key in newForm) {
      if (!newForm[key]) {
        alert("Заполните поля");
        return;
      }
    }

    addForm(newForm);
    setFormUser("");
    setFormValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-user">
        <input
          value={formUser}
          onChange={(e) => setFormUser(e.target.value)}
          type="text"
          placeholder="Введите ваше имя"
          style={{ marginBottom: 15 }}
        />
        <input
          value={formValue}
          placeholder="Введите ваш телефон"
          onChange={(e) => setFormValue(e.target.value)}
          type="text"
          multiline
          maxRows={5}
          minRows={3}
          style={{ marginBottom: 15 }}
        />
        <button type="submit">Оставить заявку</button>
      </form>
    </div>
  );
};

export default Form;
