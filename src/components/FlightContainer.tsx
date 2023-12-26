import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FlightContainer.module.css";

type FlightContainerType = {
  sIA?: string;
  singaporeAirlines?: string;
  aM?: string;
  h55MNonStop?: string;
  aM1?: string;
  s730?: string;

  /** Style props */
  propTextAlign?: CSSProperties["textAlign"];
  propWidth?: CSSProperties["width"];
  propFlexShrink?: CSSProperties["flexShrink"];
};

const FlightContainer: FunctionComponent<FlightContainerType> = ({
  sIA,
  singaporeAirlines,
  aM,
  h55MNonStop,
  aM1,
  s730,
  propTextAlign,
  propWidth,
  propFlexShrink,
}) => {
  const singaporeAirlines1Style: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
      width: propWidth,
      flexShrink: propFlexShrink,
    };
  }, [propTextAlign, propWidth, propFlexShrink]);

  return (
    <div className={styles.flightCard}>
      <div className={styles.airlineSection}>
        <img className={styles.siaIcon} alt="" src={sIA} />
        <div
          className={styles.singaporeAirlines}
          style={singaporeAirlines1Style}
        >
          {singaporeAirlines}
        </div>
      </div>
      <div className={styles.flightDetailsSection}>
        <div className={styles.departureDetails}>
          <div className={styles.am}>{aM}</div>
          <div className={styles.sin}>SIN</div>
        </div>
        <div className={styles.flightduration}>
          <img className={styles.flighticon} alt="" src="/flighticon@2x.png" />
          <div className={styles.h55mNonStop}>{h55MNonStop}</div>
        </div>
        <div className={styles.arrivalDetails}>
          <div className={styles.am}>{aM1}</div>
          <div className={styles.sin1}>LAX</div>
        </div>
      </div>
      <div className={styles.priceSection}>
        <img
          className={styles.priceSectionChild}
          alt=""
          src="/vector-1@2x.png"
        />
        <b className={styles.s730}>{s730}</b>
      </div>
    </div>
  );
};

export default FlightContainer;
