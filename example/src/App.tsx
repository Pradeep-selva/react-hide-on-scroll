import React from "react";
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
        <div className={styles.sticky}>sticky div</div>
      </HideBetweenDivs>
    </>
  );
};

export default App;
