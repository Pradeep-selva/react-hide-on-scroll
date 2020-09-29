import React from "react";

interface HideProps {
  children: React.ReactNode;
  variant?: "up" | "down";
  offset?: number;
}

interface HideState {
  show: Boolean;
  prevYOffset: number;
}

class HideScroll extends React.Component<HideProps, HideState> {
  public static defaultProps = {
    variant: "down",
  };

  state = {
    show: false,
    prevYOffset:
      window.pageYOffset + (this.props.offset ? this.props.offset : 0),
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
