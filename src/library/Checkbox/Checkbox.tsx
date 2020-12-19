import classNames from "classnames";
import React, { Component } from "react";
import "./Checkbox.scss";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;

  name?: string;
  label?: string;
  labelClassName?: string;
  className?: string;
  partiallySelected?: boolean;
  disabled?: boolean;
};

interface CheckboxState {
  id: string;
}

export class Checkbox extends Component<CheckboxProps, CheckboxState> {
  constructor(props: CheckboxProps) {
    super(props);

    this.state = {
      // sudo random ID for checkbox name
      id: `Checkbox-${Math.floor(Math.random() * 1e9)}`,
    };
  }

  onClick = () => {
    this.props.onChange(!this.props.checked);
  };

  render() {
    const {
      checked,
      label,
      className,
      partiallySelected,
      disabled,
      labelClassName,
      name,
    } = this.props;
    return (
      <div className={classNames(className, "CheckboxContinaer")}>
        <label
          className={classNames("Checkbox", {
            CheckboxIntermediate: partiallySelected,
            Disabled: disabled,
          })}
        >
          <input
            name={name}
            id={this.state.id}
            className="CheckboxInput"
            type="checkbox"
            checked={checked || partiallySelected || false}
            onChange={this.onClick}
          />
          <span className="Checkmark" />
          {label && (
            <span className={classNames("Label", labelClassName)}>{label}</span>
          )}
        </label>
      </div>
    );
  }
}
