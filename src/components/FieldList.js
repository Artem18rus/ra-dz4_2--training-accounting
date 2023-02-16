import FieldItem from "./FieldItem";

function FieldList({ fields }) {
  if (fields.length > 0) {
    fields.sort(function (a, b) {
      a = a.date.split(".");
      b = b.date.split(".");
      return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
    });
  }

  const removeClick = (e) => {
    e.target.closest(".fields").remove();
  };
  return (
    <div className="result">
      <div className="headers">
        <p>Дата (ДД.ММ.ГГГГ)</p>
        <p>Пройдено км</p>
        <p>Действия</p>
      </div>
      <ol className="resultOutput">
        {fields.map((field) => (
          <FieldItem key={field.id} field={field} removeClick={removeClick} />
        ))}
      </ol>
    </div>
  );
}

export default FieldList;
