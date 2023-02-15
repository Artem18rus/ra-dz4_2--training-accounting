function FieldList({ fields }) {
  let edit = require("../img/edit.png");
  let close = require("../img/close.png");

  if (fields.length > 0) {
    let arr = [];
    fields.forEach((item) => {
      arr.push(item);
    });
    // console.log(arr);
  }
  // fields.forEach((item) => {
  // console.log(fields[0].titleDate);
  // });
  // fields.sort(function (a, b) {
  //   // '01/03/2014'.split('/')
  //   // gives ["01", "03", "2014"]
  //   a = a.split(".");
  //   b = b.split(".");
  //   return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
  // });
  // console.log(fields);

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
