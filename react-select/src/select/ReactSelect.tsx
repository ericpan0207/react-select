import React, { useState } from "react";
import "./ReactSelect.scss";

/**
 * optionsProp: An object containing unique key and option values that appear in the dropdown
 * selectedProp: A set of selected options; uses the key of optionsProp
 * multiselect: true to allow for multiple selections, false for single selection
 * setSelected: updates the selected options
 * componentId: unique id for this instance
 */
interface Prop {
  optionsProp: { [key: string]: string };
  selectedProp: Set<string>;
  multiselect: boolean;
  setSelected: React.Dispatch<React.SetStateAction<Set<string>>>;
  componentId: number;
}

const ReactSelect: React.FC<Prop> = ({
  optionsProp,
  selectedProp,
  multiselect,
  setSelected,
  componentId,
}: Prop) => {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelection = (option: string) => {
    if (option === "option_1") {
      // Select All case
      setSelected(new Set(Object.keys(optionsProp).slice(2)));
      setSelectAll(true);
    } else if (option === "option_2") {
      // Deselect All case
      setSelected(new Set());
      setSelectAll(false);
    } else if (selectedProp.has(option)) {
      // Remove if option previously selected
      const updatedSelect = Array.from(selectedProp).filter(
        (key) => key !== option
      );
      setSelected(new Set(updatedSelect));
    } else if (!multiselect) {
      // single select update
      setSelected(new Set([option]));
    } else {
      // multi select update
      setSelected((selectedProp) => new Set(selectedProp.add(option)));
    }
  };

  const isChecked = (option: string) => {
    return selectedProp.has(option);
  };

  // Filters the options to display select all, deselect all or neither
  const getOptions = () => {
    const optionsArray = Object.entries(optionsProp);
    const filteredOptionsArray = optionsArray.filter(([key, _]) => {
      const index = parseInt(key.split("option_")[1]);
      if (!multiselect) {
        return index > 2;
      }
      if (selectAll) {
        return index !== 1;
      } else {
        return index !== 2;
      }
    });
    return Object.fromEntries(filteredOptionsArray);
  };
  return (
    <>
      <div className="select_block">
        <label
          htmlFor={`dropdown_checkbox-${componentId}`}
          className="select_label"
        ></label>

        <label htmlFor="select" className="selected_options">
          {selectedProp.size === 0 ? "Select..." : ""}
          {Array.from(selectedProp).map((option) => (
            <button onClick={() => handleSelection(option)} key={option}>
              {optionsProp[option]}
            </button>
          ))}
        </label>
      </div>

      <input
        id={`dropdown_checkbox-${componentId}`}
        className="select_dropdown"
        type="checkbox"
        readOnly
      />
      <div className="options_container">
        {Object.entries(getOptions()).map(([index, value]) => {
          return (
            <div
              className="option_item"
              key={index}
              onClick={() => handleSelection(index)}
            >
              <input type="checkbox" checked={isChecked(index)} readOnly />
              <label>{value}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReactSelect;
