import React, { useState } from "react";
import "./ReactSelect.scss";

/**
 * optionsProp: A list of options that appear in the dropdown
 * selectedProp: A list of selected options
 * multiselect: true to allow for multiple selections, false for single selection
 * setSelected: updates the selected options
 */
interface Prop {
  optionsProp: string[];
  selectedProp: string[];
  multiselect: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const ReactSelect: React.FC<Prop> = ({
  optionsProp,
  selectedProp,
  multiselect,
  setSelected,
}: Prop) => {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelection = (option: string) => {
    const optionIndex = selectedProp.indexOf(option);
    let updatedSelect = [...selectedProp];
    if (option === "Select All") {
      updatedSelect = optionsProp.slice(2);
      setSelectAll(true);
    } else if (option === "Deselect All") {
      updatedSelect = [];
      setSelectAll(false);
    } else if (optionIndex > -1) {
      updatedSelect.splice(optionIndex, 1);
    } else if (!multiselect) {
      updatedSelect = [option];
    } else {
      updatedSelect.push(option);
    }

    setSelected(updatedSelect);
  };

  const isChecked = (option: string) => {
    return selectedProp.indexOf(option) > -1;
  };

  const getOptions = () => {
    return optionsProp.filter((_, index) => {
      if (!multiselect) {
        return index > 1;
      }
      if (selectAll) {
        return index !== 0;
      } else {
        return index !== 1;
      }
    });
  };
  return (
    <>
      <div className="select_container">
        <div className="select_block">
          <label htmlFor="dropdown_checkbox" className="select_label"></label>

          <label htmlFor="select" className="selected_options">
            {selectedProp.length === 0 ? "Technology" : ""}
            {selectedProp.map((option) => (
              <button onClick={() => handleSelection(option)} key={option}>
                {option}
              </button>
            ))}
          </label>

          <input
            id="dropdown_checkbox"
            className="select_dropdown"
            type="checkbox"
          />

          <div className="options_container">
            {getOptions().map((option) => (
              <div
                className="option_item"
                key={option}
                onClick={() => handleSelection(option)}
              >
                <input type="checkbox" checked={isChecked(option)} />
                <label>{option}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactSelect;
