import React, { useState, useEffect } from "react";
import "../dd.css";

function DropDown(props) {
  const [optionDisplay, setOptionDisplay] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const [availOptions, setAvailOptions] = useState([]);
  useEffect(() => {
    if (props.multiSelect) {
      setAvailOptions(["All", ...props.options]);
    } else {
      setAvailOptions([...props.options]);
    }
  }, props.options);

  const toggleShowOptions = () => {
    setOptionDisplay((dis) => !dis);
  };
  const handleCheckBox = (e) => {
    let checked = e.target.checked;
    let options = document.getElementsByName(props.label);
    if (checked) {
      if (
        e.target.value == "All" &&
        selectedOption.length < availOptions.length
      ) {
        for (let i = 1; i < options.length; i++) {
          options[i].checked = true;
        }
        setSelectedOption(availOptions.slice(1));
      } else {
        if (props.multiSelect) {
          setSelectedOption([...selectedOption, e.target.value]);
        } else {
          setSelectedOption([e.target.value]);
        }
      }
    } else {
      if (
        e.target.value == "All" &&
        selectedOption.length < availOptions.length
      ) {
        for (let i = 0; i < options.length; i++) {
          options[i].checked = false;
        }
        setSelectedOption([]);
      } else {
        setSelectedOption(selectedOption.filter((op) => op !== e.target.value));
        options[0].checked = false;
      }
    }
  };

  return (
    <div className="DropDown">
      <button className="ddButton" onClick={toggleShowOptions}>
        {selectedOption.length != 0 ? (
          <>
            {selectedOption.length <= 3 ? (
              <span>{selectedOption.slice(0, 3).join(", ")}</span>
            ) : (
              <span>{selectedOption.slice(0, 3).join(", ")} ...</span>
            )}
          </>
        ) : (
          <span>{props.label}</span>
        )}
      </button>
      <div className={optionDisplay ? "ddOptions" : "hide"}>
        {availOptions.map((op) => (
          <div className="ddItem">
            {props.multiSelect ? (
              <input
                type="checkbox"
                id={op}
                name={props.label}
                value={op}
                onClick={(e) => handleCheckBox(e)}
              ></input>
            ) : (
              <input
                type="radio"
                id={op}
                name={props.label}
                value={op}
                onClick={(e) => handleCheckBox(e)}
              ></input>
            )}
            <label className="ddText" for={op}>
              {op}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
