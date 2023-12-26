import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchFormSectionContainer from "../components/SearchFormSectionContainer";
import FilterContainer from "../components/FilterContainer";
import FlightCardsFormContainer from "../components/FlightCardsFormContainer";
import SubscriptionContainer from "../components/SubscriptionContainer";
import styles from "./ResultsPage.module.css";

const ResultsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.resultsPage}>
      <header className={styles.topHeader}>
        <div className={styles.topContainer}>
          <button
            className={styles.fickleflightLogo}
            onClick={onFickleflightLogoClick}
          >
            <img className={styles.symbolsIcon} alt="" src="/symbols@2x.png" />
          </button>
          <div className={styles.navigationRight}>
            <div className={styles.navigationMenu}>
              <div className={styles.explore} onClick={onExploreTextClick}>
                Explore
              </div>
              <button className={styles.search}>Search</button>
              <div className={styles.explore} onClick={onHotelsTextClick}>
                Hotels
              </div>
              <button className={styles.offers}>Offers</button>
            </div>
            <div className={styles.accountSection}>
              <img
                className={styles.hamburgerMenuIcon}
                alt=""
                src="/notification.svg"
              />
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="/notification1.svg"
              />
              <img
                className={styles.unsplashd1upkifd04aIcon}
                alt=""
                src="/top_avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <SearchFormSectionContainer />
      <div className={styles.searchResults}>
        <FilterContainer />
        <FlightCardsFormContainer />
      </div>
      <SubscriptionContainer />
    </div>
  );
};

export default ResultsPage;
