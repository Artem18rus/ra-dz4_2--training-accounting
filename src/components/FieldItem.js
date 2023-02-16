function FieldItem({ field, removeClick }) {
  let edit = require("../img/edit.png");
  let close = require("../img/close.png");

  return (
    <li className="fields">
      <div className="dateResult">{field.date}</div>
      <div className="distanceResult">{field.distance}</div>
      <div className="actionsResult">
        <div className="editField">
          <img src={edit} alt="edit" />
        </div>
        <div onClick={removeClick} className="removeField">
          <img src={close} alt="close" />
        </div>
      </div>
    </li>
  );
}

export default FieldItem;
