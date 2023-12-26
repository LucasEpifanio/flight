import { FunctionComponent } from "react";
import FlightExperienceCard from "./FlightExperienceCard";
import styles from "./FilterContainer.module.css";

const FilterContainer: FunctionComponent = () => {
  return (
    <div className={styles.searchFilters}>
      <div className={styles.resultsSummary}>
        <div className={styles.results}>10 out of 177 Results</div>
        <img
          className={styles.resultsSummaryChild}
          alt=""
          src="/vector-2@2x.png"
        />
      </div>
      <FlightExperienceCard
        results="Booking Options"
        propTop="231.4px"
        propWidth="221px"
        propWidth1="189.03px"
      />
      <FlightExperienceCard
        results="Flight Experience"
        propTop="376.6px"
        propWidth="310.8px"
        propWidth1="198.04px"
      />
      <FlightExperienceCard
        results="Airlines"
        propTop="561px"
        propWidth="181px"
        propWidth1="87.77px"
      />
      <FlightExperienceCard
        results="Stops"
        propTop="86.2px"
        propWidth="296.62px"
        propWidth1="65.26px"
      />
      <img className={styles.seperatorIcon} alt="" src="/seperator@2x.png" />
    </div>
  );
};

export default FilterContainer;
