import React, { useState } from "react";
import FieldList from "./FieldList";
import FieldFormAdd from "./FieldFormAdd";

function Accounting() {
  const [fields, setFields] = useState([]);

  const addField = (field) => {
    setFields((prevFields) => [...prevFields, field]);
  };
  // console.log(fields);

  const filteredField = () => {
    return fields;
  };

  return (
    <div className="container-form">
      <FieldFormAdd onAddField={addField} />
      <FieldList fields={filteredField()} />
    </div>
  );
}

export default Accounting;
