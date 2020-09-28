import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { HideBetween, HideOn } from "react-hide-on-scroll";

const App = () => {
  return (
    <>
      <div
        id="first"
        className={styles.div}
        style={{ backgroundColor: "green" }}
      >
        first div
        <a
          className={styles.link}
          href="https://github.com/Pradeep-selva/react-hide-on-scroll/tree/master/example"
          target="_blank"
          rel="noreferrer noopener"
        >
          View Code
        </a>
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

      <HideOn divID="third">
        <div className={classNames(styles.sticky, styles.hideOnDiv)}>
          Hidden from third div
        </div>
      </HideOn>

      <HideOn inverse divID="third">
        <div className={classNames(styles.sticky, styles.hideOnDiv)}>
          Shown from third div
        </div>
      </HideOn>

      <HideOn height={1200}>
        <div className={classNames(styles.sticky, styles.hideOnHeight)}>
          Hidden from 1200px height
        </div>
      </HideOn>

      <HideOn inverse height={1200}>
        <div className={classNames(styles.sticky, styles.hideOnHeight)}>
          Shown from 1200px height
        </div>
      </HideOn>

      <HideBetween div startDivID="first" endDivID="third">
        <div className={classNames(styles.hide1to3, styles.sticky)}>
          hidden from div 1 to 3
        </div>
      </HideBetween>

      <HideBetween div inverse startDivID="first" endDivID="third">
        <div className={classNames(styles.show1to3, styles.sticky)}>
          visible from div 1 to 3
        </div>
      </HideBetween>

      <HideBetween div startDivOffset={950} startDivID="first" endDivID="third">
        <div className={classNames(styles.hide1to3Offset, styles.sticky)}>
          hidden from div 1 to 3 with 950px start offset
        </div>
      </HideBetween>

      <HideBetween height startHeight={900} endHeight={1900}>
        <div className={classNames(styles.hideHeight, styles.sticky)}>
          hidden from 900px to 1900px
        </div>
      </HideBetween>

      <HideBetween height inverse startHeight={900} endHeight={1900}>
        <div className={classNames(styles.hideHeight, styles.sticky)}>
          visible from 900px to 1900px
        </div>
      </HideBetween>
    </>
  );
};

export default App;
