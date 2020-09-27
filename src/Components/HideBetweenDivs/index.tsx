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
    const offset = (el: HTMLElement | null): Number => {
      const rect: DOMRect | undefined = el?.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return rect!.top + scrollTop;
    };

    let startDiv: HTMLElement | null = null,
      endDiv: HTMLElement | null = null;

    if (!this.props.div) {
      startDiv = document.querySelector(
        `#${this.props.startDivID}`
      ) as HTMLElement;

      endDiv = document.querySelector(`#${this.props.endDivID}`) as HTMLElement;
    }

    let startDivTopOffset: Number | undefined = this.props.height
      ? this.props.startHeight || 0
      : offset(startDiv);

    let endDivTopOffset: Number | undefined = this.props.height
      ? this.props.endHeight || 0
      : offset(endDiv);

    const winScroll: Number =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll >= startDivTopOffset && winScroll <= endDivTopOffset) {
      this.setState({
        show: this.props.inverse,
      });
    } else {
      this.setState({
        show: !this.props.inverse,
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
