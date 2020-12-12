import React from "react";
import { HideProps, HideState } from "../../Interfaces";

class HideScroll extends React.Component<HideProps, HideState> {
  public static defaultProps = {
    variant: "down",
    showOnPageInit: true
  };

  state = {
    show: HideScroll.defaultProps.showOnPageInit && this.props.showOnPageInit,
    prevYOffset: window.pageYOffset,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const { prevYOffset } = this.state;
    const { variant } = this.props;

    const currentYOffset = window.pageYOffset;

    if (prevYOffset > currentYOffset) {
      this.setState({
        show: variant === "down",
        prevYOffset: currentYOffset,
      });
    } else {
      this.setState({
        show: variant !== "down",
        prevYOffset: currentYOffset,
      });
    }
  };

  render() {
    return (
      <React.Fragment>{this.state.show && this.props.children}</React.Fragment>
    );
  }
}

export default HideScroll;
