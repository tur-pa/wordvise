import CityItem from "./CityItem";
import Message from "./Message";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner></Spinner>;

  if (!cities.length) return <Message message="Add you 1st city!"></Message>;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id}></CityItem>
      ))}
    </ul>
  );
}

export default CityList;
