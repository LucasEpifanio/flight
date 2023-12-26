import { FunctionComponent } from "react";
import FlightInfoContainer from "./FlightInfoContainer";
import FlightContainer from "./FlightContainer";
import styles from "./FlightCardsFormContainer.module.css";

const FlightCardsFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.flightCards}>
      <FlightInfoContainer
        flightDetails="/turkish@2x.png"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightNumber="/flighticon@2x.png"
        flightDuration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        flightPrice="S$ 723"
        propTextAlign="left"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <FlightContainer
        sIA="/sia@2x.png"
        singaporeAirlines="Singapore Airlines"
        aM="8:45 PM"
        h55MNonStop="15H 10M, 2-stops"
        aM1="7:55 PM"
        s730="S$ 900"
        propTextAlign="center"
        propWidth="140px"
        propFlexShrink="0"
      />
      <FlightInfoContainer
        flightDetails="/japan@2x.png"
        airlineName="Japan Airlines"
        departureTime="8:20 PM"
        flightNumber="/flighticon@2x.png"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
        propTextAlign="left"
        propRight="6.33%"
        propLeft="5.15%"
      />
      <FlightInfoContainer
        flightDetails="/ana@2x.png"
        airlineName="ANA"
        departureTime="6:35 PM"
        flightNumber="/flighticon@2x.png"
        flightDuration="19H 15M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 936"
        propTransform="scale(0.8)"
        propTextAlign="left"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <FlightInfoContainer
        flightDetails="/americanairlines@2x.png"
        airlineName="American Airlines"
        departureTime="8:20 PM"
        flightNumber="/flighticon@2x.png"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 AM"
        flightPrice="S$ 939"
        propTransform="unset"
        propTextAlign="center"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <FlightContainer
        sIA="/turkish@2x.png"
        singaporeAirlines="Turkish Airlines"
        aM="11:35 PM"
        h55MNonStop="33H 10M, 2-stops"
        aM1="4:45 PM"
        s730="S$ 673"
        propTextAlign="left"
        propWidth="unset"
        propFlexShrink="unset"
      />
      <FlightInfoContainer
        flightDetails="/japan@2x.png"
        airlineName="Japan Airlines"
        departureTime="10:25 PM"
        flightNumber="/flighticon@2x.png"
        flightDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
        propTextAlign="left"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <FlightInfoContainer
        flightDetails="/americanairlines@2x.png"
        airlineName="American Airlines"
        departureTime="10:25 PM"
        flightNumber="/flighticon@2x.png"
        flightDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
        propTransform="unset"
        propTextAlign="center"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <button className={styles.primaryButton}>
        <div className={styles.primaryButtonChild} />
        <div className={styles.searchFlights}>Show more results</div>
      </button>
    </div>
  );
};

export default FlightCardsFormContainer;
