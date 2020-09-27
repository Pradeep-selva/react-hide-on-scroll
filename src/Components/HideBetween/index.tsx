import React from "react";
import { getOffset } from "../../util";
import { HideBetweenProps, HideBetweenState } from "../../Interfaces";

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
    const {
      startDivID,
      endDivID,
      startHeight,
      endHeight,
      height,
      inverse,
      startDivOffset,
      endDivOffset,
    } = this.props;

    let startDiv: HTMLElement | null = null,
      endDiv: HTMLElement | null = null;

    if (!height) {
      startDiv = document.querySelector(`#${startDivID}`) as HTMLElement;
      endDiv = document.querySelector(`#${endDivID}`) as HTMLElement;
    }

    let startDivTopOffset: number = height
      ? startHeight || 0
      : getOffset(startDiv);

    let endDivTopOffset: number = height ? endHeight || 0 : getOffset(endDiv);

    if (!height) {
      if (startDivOffset) startDivTopOffset += startDivOffset;
      else if (endDivOffset) endDivTopOffset += endDivOffset;
    }

    const winScroll: number =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll >= startDivTopOffset && winScroll <= endDivTopOffset) {
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
