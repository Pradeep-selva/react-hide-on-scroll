import React from "react";
import { getOffset } from "../../util";
import { HideOnProps, HideOnState } from "../../Interfaces";

class HideOn extends React.Component<HideOnProps, HideOnState> {
  public static defaultProps = {
    showOnPageInit: true,
  };

  state = {
    show: false,
  };

  componentDidMount() {
    this.props.showOnPageInit && this.listenToScroll();
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

export default HideOn;
