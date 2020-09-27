import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { HideBetweenDivs } from "react-hide-on-scroll";

const App = () => {
  return (
    <>
      <div
        id="first"
        className={styles.div}
        style={{ backgroundColor: "green" }}
      >
        first div
      </div>
      <div className={styles.div} style={{ backgroundColor: "red" }}>
        second div
      </div>
      <div
        id="third"
        className={styles.div}
        style={{ backgroundColor: "blue" }}
      >
        third div
      </div>
      <div className={styles.div} style={{ backgroundColor: "orange" }}>
        fourth div
      </div>
      <HideBetweenDivs startDivID="first" endDivID="third">
        <div className={classNames(styles.hide1to3, styles.sticky)}>
          hidden from div 1 to 3
        </div>
      </HideBetweenDivs>
      <HideBetweenDivs inverse startDivID="first" endDivID="third">
        <div className={classNames(styles.show1to3, styles.sticky)}>
          visible from div 1 to 3
        </div>
      </HideBetweenDivs>
      <HideBetweenDivs startDivOffset={950} startDivID="first" endDivID="third">
        <div className={classNames(styles.hide1to3Offset, styles.sticky)}>
          hidden from div 1 to 3 with 950px start offset
        </div>
      </HideBetweenDivs>
      <HideBetweenDivs height startHeight={900} endHeight={1900}>
        <div className={classNames(styles.hideHeight, styles.sticky)}>
          hidden from 900px to 1900px
        </div>
      </HideBetweenDivs>
      <HideBetweenDivs height startHeight={900} endHeight={1900}>
        <div className={classNames(styles.hideHeight, styles.sticky)}>
          visible from 900px to 1900px
        </div>
      </HideBetweenDivs>
    </>
  );
};

export default App;
