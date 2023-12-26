import { FunctionComponent } from "react";
import Header from "../components/Header";
import LAHeader from "../components/LAHeader";
import HotelResultsForm from "../components/HotelResultsForm";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";
import styles from "./HotelsPage.module.css";

const HotelsPage: FunctionComponent = () => {
  return (
    <div className={styles.hotelsPage}>
      <Header />
      <LAHeader />
      <HotelResultsForm />
      <WeeklyUpdatesContainer
        imageDimensions="/newsletter-section-background@2x.png"
        imageId="/logo@2x.png"
        thumbnailDimensions="/social-icons@2x.png"
      />
    </div>
  );
};

export default HotelsPage;
