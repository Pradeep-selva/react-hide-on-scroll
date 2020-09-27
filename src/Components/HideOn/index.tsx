import React from "react";
import { getOffset } from "../../util";

export interface HideBetweenProps {
  children: React.ReactNode;
  inverse?: Boolean;
  divID?: String;
  offset?: number;
  height?: number;
  atDiv?: Boolean;
  atHeight?: Boolean;
}

export interface HideBetweenState {
  show: Boolean | undefined;
}

class HideBetween extends React.Component<HideBetweenProps, HideBetweenState> {
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
    const { atHeight, inverse, divID, offset, height } = this.props;

    let div: HTMLElement | null = null;

    if (!atHeight) {
      div = document.querySelector(`#${divID}`) as HTMLElement;
    }

    let divTopOffset: number = height ? height || 0 : getOffset(div);

    if (!height && offset) {
      divTopOffset += offset;
    }

    const winScroll: number =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll >= divTopOffset) {
      this.setState({
        show: inverse,
      });
    } else {
      this.setState({
        show: !inverse,
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
