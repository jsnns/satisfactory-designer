import React, { Component, ReactElement } from "react";
import "./Input.scss";

interface InputProps<T> {
  value: T;
  onChange: (value: T) => void;
  label?: string;
  leftElement?: ReactElement | null;
  autoFocus?: boolean;
}

export class NumberInput extends Component<InputProps<number>> {
  render() {
    const { label, value, onChange, leftElement } = this.props;
    return (
      <div className="NumberInput">
        {label && <label>{label}</label>}
        <div className="NumberInputBody">
          <input
            type="number"
            value={value}
            onChange={(e) => {
              onChange(Number(e.target.value));
            }}
          />
          {leftElement && leftElement}
        </div>
      </div>
    );
  }
}

export class StringInput extends Component<InputProps<string>> {
  render() {
    const { label, value, onChange, leftElement, autoFocus } = this.props;
    return (
      <div className="NumberInput">
        {label && <label>{label}</label>}
        <div className="NumberInputBody">
          <input
            autoFocus={autoFocus}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
          {leftElement && leftElement}
        </div>
      </div>
    );
  }
}
