import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCardContainer from "./HotelCardContainer";
import HotelCard2Container from "./HotelCard2Container";
import styles from "./PopularStaysFormButtons.module.css";

const PopularStaysFormButtons: FunctionComponent = () => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <form className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <button
          className={styles.viewAllStaysButton}
          onClick={onViewAllStaysButtonClick}
        >
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright@2x.png"
          />
        </button>
      </div>
      <div className={styles.hotelCards}>
        <HotelCardContainer
          roomDescription="/matterhorn-suites-image@2x.png"
          roomType="Entire bungalow"
          hotelName="Matterhorn Suites"
          roomPrice="$575/night"
          roomReviews="/video@2x.png"
          hotelReviews="(60 reviews)"
          roomRating="4.9"
          roomImageUrl="/vector@2x.png"
        />
        <HotelCard2Container
          roomDescription="/discovery-shores-image@2x.png"
          roomType="2-Story beachfront suite"
          roomPrice="Discovery Shores"
          roomReviews="$360/night"
          hotelName="(116 reviews)"
          roomRating="4.8"
          roomCoordinates="/vector@2x.png"
          propWidth="37.54%"
          propRight="62.46%"
        />
        <HotelCard2Container
          roomDescription="/arctic-hut-image@2x.png"
          roomType="Single deluxe hut"
          roomPrice="Arctic Hut "
          roomReviews="$420/night"
          hotelName="(78 reviews)"
          roomRating="4.7"
          roomCoordinates="/vector@2x.png"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelCardContainer
          roomDescription="/lake-louise-image@2x.png"
          roomType="Deluxe King Room"
          hotelName="Lake Louise Inn"
          roomPrice="$244/night"
          roomReviews="/video@2x.png"
          hotelReviews="(63 reviews)"
          roomRating="4.6"
          roomImageUrl="/vector@2x.png"
        />
      </div>
      <div className={styles.mobileViewAllStays}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img
          className={styles.arrowRightIcon}
          alt=""
          src="/arrowright@2x.png"
        />
      </div>
    </form>
  );
};

export default PopularStaysFormButtons;
