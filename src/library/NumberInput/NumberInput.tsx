import React, { Component, ReactElement } from "react";
import "./NumberInput.scss";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  label?: string;
  leftElement?: ReactElement | null;
}

export class NumberInput extends Component<NumberInputProps> {
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
            placeholder="Overclock Speed"
          />
          {leftElement && leftElement}
        </div>
      </div>
    );
  }
}
