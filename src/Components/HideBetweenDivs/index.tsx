import React from "react";

interface Props {
  children: React.ReactNode;
  inverse?: Boolean;
  startDivID?: String;
  endDivID?: String;
  startDivOffset?: number;
  endDivOffset?: number;
  startHeight?: number;
  endHeight?: number;
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
    const offset = (el: HTMLElement | null): number => {
      const rect: DOMRect | undefined = el?.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return rect!.top + scrollTop;
    };

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
      : offset(startDiv);

    let endDivTopOffset: number = height ? endHeight || 0 : offset(endDiv);

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

export default HideBetweenDivs;
