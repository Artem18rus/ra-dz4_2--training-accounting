import React, { useState } from "react";
import { nanoid } from "nanoid";

function FieldFormAdd({ onAddField }) {
  let [titleDate, setTitleDate] = useState();
  let [titleDistance, setTitleDistance] = useState();

  const handlerSubmit = (e) => {
    e.preventDefault();

    const dateReg = /^\d{2}[.]\d{2}[.]\d{4}$/;
    const distanceReg = /^\d{1,3}[.]?\d{1,2}$/;

    if (dateReg.test(titleDate) && distanceReg.test(titleDistance)) {
      let dateResult = document.querySelectorAll(".dateResult");

      dateResult.forEach((item) => {
        if (titleDate === item.innerText) {
          let parent = item.parentElement.querySelector(".distanceResult");
          let sum = Number(parent.innerText) + Number(titleDistance);
          titleDistance = sum.toFixed(2);
          parent.parentElement.remove();
        }
      });
      onAddField({
        id: nanoid(),
        titleDate,
        titleDistance
      });

      // let dateRes = Array.from(document.querySelectorAll(".dateResult"));
      // // console.log(dateRes);
      // let arrDate = dateRes.map((item) => item.innerText);
      // console.log(arrDate);
      // let arrDateSort = dateResult.map((item) => item.innerText);
      // arrDate.sort(function (a, b) {
      //   // '01/03/2014'.split('/')
      //   // gives ["01", "03", "2014"]
      //   a = a.split(".");
      //   b = b.split(".");
      //   return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
      // });
      // console.log(arrDate);
    }
    // setTitleDate("");
    // setTitleDistance("");
  };

  const changeDate = (event) => {
    setTitleDate(event.target.value);
  };

  const changeDistance = (event) => {
    setTitleDistance(event.target.value);
  };

  return (
    <form onSubmit={handlerSubmit} className="appForm">
      <div className="formDiv">
        <p>Дата (ДД.ММ.ГГГГ)</p>
        <input
          className="inputDate"
          name="date"
          placeholder="Введите дату"
          onChange={changeDate}
        />
      </div>
      <div className="formDiv">
        <p>Пройдено км</p>
        <input
          className="inputDistance"
          name="distance"
          placeholder="км"
          onChange={changeDistance}
        />
      </div>
      <button className="okBtn">ОК</button>
    </form>
  );
}

export default FieldFormAdd;
