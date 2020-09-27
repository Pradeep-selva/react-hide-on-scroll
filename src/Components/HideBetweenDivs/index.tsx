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
  show: Boolean;
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
    function offset(el: HTMLElement): Number {
      let rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return rect.top + scrollTop;
    }

    let gameDiv = document.querySelector(
      `#${this.props.startDivID}`
    ) as HTMLElement;
    let gameDivTopOffset = offset(gameDiv);

    let featuredDiv = document.querySelector(
      `#${this.props.endDivID}`
    ) as HTMLElement;
    let featuredDivTopOffset = offset(featuredDiv);

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll >= gameDivTopOffset && winScroll <= featuredDivTopOffset) {
      this.setState({
        show: true,
      });
    } else {
      this.setState({
        show: false,
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
