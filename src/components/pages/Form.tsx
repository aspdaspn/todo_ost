import React from "react";

export default function Form() {
  return (
    <form>
      <div className="flex-horizontal">
        <input
          type="text"
          className="input"
          placeholder="Aufgabe..."
          id="txt-add"
        />
        <button type="submit" className="button" id="btn-add">
          Hinzuzfügen
        </button>
      </div>
      <div className="flex-horizontal flex-left">
        <input
          type="checkbox"
          className="show-checkbox"
          name="show-all"
          checked
        />
        <label>Alle anzeigen</label>
      </div>
    </form>
  );
}