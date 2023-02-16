import React, { useState } from "react";
import { nanoid } from "nanoid";
import FieldList from "./FieldList";

function Accounting() {
  const [fields, setFields] = useState([]);

  let [newTitleDate, setNewTitleDate] = useState("");
  let [newTitleDistance, setNewTitleDistance] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    const dateReg = /^\d{2}[.]\d{2}[.]\d{4}$/;
    const distanceReg = /^\d{0,3}[.]?\d{1,2}$/;

    if (dateReg.test(newTitleDate) && distanceReg.test(newTitleDistance)) {
      let dateResult = document.querySelectorAll(".dateResult");

      dateResult.forEach((item) => {
        if (newTitleDate === item.innerText) {
          let parent = item.parentElement.querySelector(".distanceResult");
          let sum = Number(parent.innerText) + Number(newTitleDistance);
          newTitleDistance = sum.toFixed(2);
          parent.parentElement.remove();
        }
      });

      const newFields = {
        id: nanoid(),
        date: newTitleDate,
        distance: newTitleDistance
      };
      setFields((prevField) => {
        return [...prevField, newFields];
      });
      setNewTitleDate("");
      setNewTitleDistance("");
    }
  };
  const changeDate = (e) => {
    setNewTitleDate(e.target.value);
  };

  const changeDistance = (e) => {
    setNewTitleDistance(e.target.value);
  };

  return (
    <div className="container-form">
      <form onSubmit={handlerSubmit} className="appForm">
        <div className="formDiv">
          <p>Дата (ДД.ММ.ГГГГ)</p>
          <input
            className="inputDate"
            value={newTitleDate}
            placeholder="Введите дату"
            onChange={changeDate}
          />
        </div>
        <div className="formDiv">
          <p>Пройдено км</p>
          <input
            className="inputDistance"
            value={newTitleDistance}
            placeholder="км"
            onChange={changeDistance}
          />
        </div>
        <button className="okBtn">ОК</button>
      </form>
      <FieldList fields={fields} />
    </div>
  );
}

export default Accounting;
