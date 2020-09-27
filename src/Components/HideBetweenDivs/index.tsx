import React from "react";

interface Props {
  children: React.ReactNode;
  inverse?: Boolean;
  startDivID?: String;
  endDivID?: String;
  startDivOffset?: Number;
  endDivOffset?: Number;
  startHeight?: Number;
  endHeight?: Number;
  div?: Boolean;
  height?: Boolean;
}

interface State {
  show: Boolean | undefined;
}

class HideBetweenDivs extends React.Component<Props, State> {
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
    const offset = (el: HTMLElement): Number => {
      const rect: DOMRect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return rect.top + scrollTop;
    };

    let gameDiv = document.querySelector(
      `#${this.props.startDivID}`
    ) as HTMLElement;
    let gameDivTopOffset: Number = offset(gameDiv);

    let featuredDiv = document.querySelector(
      `#${this.props.endDivID}`
    ) as HTMLElement;
    let featuredDivTopOffset: Number = offset(featuredDiv);

    const winScroll: Number =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll >= gameDivTopOffset && winScroll <= featuredDivTopOffset) {
      this.setState({
        show: !this.props.inverse,
      });
    } else {
      this.setState({
        show: this.props.inverse,
      });
    }
  };

  render() {
    return (
      <React.Fragment>{this.state.show && this.props.children}</React.Fragment>
    );
  }
}

export default HideBetweenDivs;
