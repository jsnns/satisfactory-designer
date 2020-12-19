import classNames from "classnames";
import React, { Component } from "react";
import { Checkbox } from "..";
import HandleClickOutside from "../HandleClickOutside";
import "./ManySelect.scss";

interface Option<T> {
  value: T;
  label: string;
}

interface ManySelectProps<OptionT> {
  options: Option<OptionT>[];
  selected: OptionT[];
  onSelectionChange: (option: OptionT[]) => void;

  // optional
  label?: string;
  includeSelectAll?: boolean;
  keyPrefix?: string;
  maxDropdownHeight?: number | string;
  placeholder?: string;
  optionsToShowInLabel?: number;
  defaultOptionLabel?: string;
}

interface ManySelectState {
  dropdownOpen: boolean;
}

/**
 * ## Required Props
 *
 * @param options list of options to display
 * @param slected list of option values currently selected
 * @param onSelectionChange alled with full new selection when updated
 *
 * ## Optional Params
 *
 * @param label label is displayed in
 * @param includeSelectAll add "All" checkbox at the top of dropdown and indents other options
 * @param keyPrefix prefix for 'mapped' Element's keys, to be used when multiple many-selects are used in a single page context
 * @param maxDropdownHeightPx specifies max height of the dropdown element
 * @param placeholder text displayed when no options are selected
 * @param optionsToShowInLabel number of options to display as comma seperated string in field
 * @param defaultOptionLabel when an option's label is not provided we will use defaultOptionLabel then the option value
 *
 */
export class ManySelect<OptionT> extends Component<
  ManySelectProps<OptionT>,
  ManySelectState
> {
  constructor(props: ManySelectProps<OptionT>) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  handleClickOutside = () => {
    if (this.state.dropdownOpen) {
      this.setState({ dropdownOpen: false });
    }
  };

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  onSelectOption = (value: OptionT) => {
    // init selection to copy of the current selection
    let newSelection = [...this.props.selected];

    if (this.props.selected.includes(value)) {
      newSelection = newSelection.filter(
        (optionValue) => optionValue !== value
      );
    } else {
      newSelection.push(value);
    }

    this.props.onSelectionChange(newSelection);
  };

  onSelectAll = () => {
    // deselect all options if all are selected
    if (this.props.selected.length === this.props.options.length) {
      this.props.onSelectionChange([]);
    } else {
      this.props.onSelectionChange(
        this.props.options.map((option) => option.value)
      );
    }
  };

  findLabelForValue = (value: OptionT): string => {
    const option = this.props.options.find((option) => option.value === value);
    return (
      option?.label ||
      this.props.defaultOptionLabel ||
      String(option?.value) ||
      "N/A"
    );
  };

  isOptionSelected(value: OptionT): boolean {
    return this.props.selected.includes(value);
  }

  get selectedTextLabel(): string {
    if (this.props.selected.length === 0) {
      return this.props.placeholder || "Select an option";
    }

    if (this.props.selected.length > (this.props.optionsToShowInLabel || 3)) {
      return `Multiple Selected (${this.props.selected.length})`;
    }

    return this.props.selected.map(this.findLabelForValue).join(", ");
  }

  get isAllSelected() {
    return this.props.selected.length === this.props.options.length;
  }

  renderOption = (option: Option<OptionT>) => {
    const isSelected = this.isOptionSelected(option.value);
    return (
      <div
        key={`manySelectOption-${this.props.keyPrefix || "noKeyPrefix"}${
          option.value
        }`}
        className="Option"
        style={{ marginLeft: this.props.includeSelectAll ? 10 : 0 }}
      >
        <Checkbox
          onChange={() => this.onSelectOption(option.value)}
          checked={isSelected}
          label={option.label}
        />
      </div>
    );
  };

  render() {
    const { options, label, includeSelectAll } = this.props;

    return (
      <HandleClickOutside handler={this.handleClickOutside}>
        <div className="ManySelectContainer">
          <div onClick={this.toggleDropdown} className="ManySelect">
            <div className="ManySelectBody">
              {label && <label>{label}</label>}
              <p className="SelectedText">{this.selectedTextLabel}</p>
            </div>
          </div>
          {this.state.dropdownOpen && (
            <div
              className="ManySelectDropDown"
              style={{
                maxHeight: this.props.maxDropdownHeight,
              }}
            >
              {includeSelectAll && (
                <div className={classNames("Option", "AllOption")}>
                  <Checkbox
                    onChange={this.onSelectAll}
                    checked={this.isAllSelected}
                    label="All"
                    partiallySelected={
                      !this.isAllSelected && this.props.selected.length > 0
                    }
                  />
                </div>
              )}
              {options.map(this.renderOption)}
            </div>
          )}
        </div>
      </HandleClickOutside>
    );
  }
}
