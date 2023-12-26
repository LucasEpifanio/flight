import { FunctionComponent } from "react";
import WeeklyUpdatesContainer from "./WeeklyUpdatesContainer";
import styles from "./SubscriptionContainer.module.css";

const SubscriptionContainer: FunctionComponent = () => {
  return (
    <div className={styles.footerSection}>
      <WeeklyUpdatesContainer
        imageDimensions="/newsletter-section-background@2x.png"
        imageId="/logo@2x.png"
        thumbnailDimensions="/social-icons@2x.png"
      />
    </div>
  );
};

export default SubscriptionContainer;
