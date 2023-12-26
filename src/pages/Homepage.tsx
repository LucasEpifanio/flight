import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ExploreContainer from "../components/ExploreContainer";
import UpcomingFlightContainer from "../components/UpcomingFlightContainer";
import PopularDestinationsMain from "../components/PopularDestinationsMain";
import HolidayContainer from "../components/HolidayContainer";
import PopularStaysFormButtons from "../components/PopularStaysFormButtons";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <ExploreContainer />
      <div className={styles.homeContents}>
        <UpcomingFlightContainer />
        <PopularDestinationsMain />
        <HolidayContainer />
        <PopularStaysFormButtons />
      </div>
      <WeeklyUpdatesContainer
        imageDimensions="/subscribe-section-background@2x.png"
        imageId="/logo@2x.png"
        thumbnailDimensions="/social-icons@2x.png"
      />
    </div>
  );
};

export default Homepage;
