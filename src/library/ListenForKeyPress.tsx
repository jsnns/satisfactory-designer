import { Component } from "react";

interface Props {
  keys: string[];
  listener: () => void;
}

export class ListenForKeyPress extends Component<Props> {
  componentDidMount() {
    window.addEventListener("keyup", this.listener);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.listener);
  }

  listener = (ev: KeyboardEvent) => {
    if (this.props.keys.includes(ev.key)) {
      this.props.listener();
    }
  };

  render() {
    return this.props.children;
  }
}
