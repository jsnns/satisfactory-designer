import { Component } from "react";
import onClickOutside from "react-onclickoutside";

class HandleClickOutside extends Component<{ handler: Function }> {
  handleClickOutside() {
    this.props.handler();
  }

  render() {
    return this.props.children;
  }
}

export default onClickOutside(HandleClickOutside);
