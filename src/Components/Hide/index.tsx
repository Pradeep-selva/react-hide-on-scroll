import React from "react";

interface HideProps {
  children: React.ReactNode;
  variant?: "up" | "down";
  start?: number;
  end?: number;
}

interface HideState {
  show: Boolean;
  prevYOffset: number;
}

class HideBetween extends React.Component<HideProps, HideState> {
  public static defaultProps = {
    variant: "up",
  };

  state = {
    show: false,
    prevYOffset: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const { variant, start, end } = this.props;

    const winScroll: number =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > this.state.prevYOffset) {
      this.setState({
        show: variant == "down",
      });
    } else {
      this.setState({
        show: !(variant == "down"),
      });
    }
  };

  render() {
    return (
      <React.Fragment>{this.state.show && this.props.children}</React.Fragment>
    );
  }
}

export default HideBetween;
