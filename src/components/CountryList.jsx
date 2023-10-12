import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner></Spinner>;

  if (!cities.length) return <Message message="Add you 1st city!"></Message>;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={""}></CountryItem>
      ))}
    </ul>
  );
}

export default CountriesList;
