import React from "react";
import { HideDuringProps, HideDuringState } from "../../Interfaces";

class HideDuring extends React.Component<HideDuringProps, HideDuringState> {
  timeout: NodeJS.Timeout | null = null;

  state = {
    show: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    this.setState({
      show: !this.props.inverse,
    });

    this.timeout && clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.setState({ show: this.props.inverse ? true : false });
    }, 100);
  };

  render() {
    return (
      <React.Fragment>{this.state.show && this.props.children}</React.Fragment>
    );
  }
}

export default HideDuring;
