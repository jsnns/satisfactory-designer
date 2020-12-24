import { Component } from "react";

interface Props {
  handlers: { [key: string]: () => void };
}

export class ListenForKeyPress extends Component<Props> {
  componentDidMount() {
    window.addEventListener("keyup", this.listener);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.listener);
  }

  listener = (ev: KeyboardEvent) => {
    if (this.props.handlers.hasOwnProperty(ev.key)) {
      this.props.handlers[ev.key]();
    }
  };

  render() {
    return this.props.children;
  }
}
