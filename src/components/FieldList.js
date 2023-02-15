function FieldList({ fields }) {
  let edit = require("../img/edit.png");
  let close = require("../img/close.png");

  if (fields.length > 0) {
    fields.sort(function (a, b) {
      a = a.titleDate.split(".");
      b = b.titleDate.split(".");
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
          <li key={field.id} className="fields">
            <div className="dateResult">{field.titleDate}</div>
            <div className="distanceResult">{field.titleDistance}</div>
            <div className="actionsResult">
              <div className="editField">
                <img src={edit} alt="edit" />
              </div>
              <div onClick={removeClick} className="removeField">
                <img src={close} alt="close" />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default FieldList;
