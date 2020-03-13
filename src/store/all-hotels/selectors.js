import StoreNameSpace from "../store-name-space";

const selectCities = (state) => {
  const hotels = state[StoreNameSpace.ALL_HOTELS].hotels;
  const cities = [];
  const addedNameCities = [];

  hotels.forEach((item) => {
    if (addedNameCities.indexOf(item.city.name) === -1) {
      addedNameCities.push(item.city.name);
      cities.push(item.city);
    }
  });

  return cities;
};

export {selectCities};
