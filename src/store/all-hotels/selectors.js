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

const selectHotelById = (state, id) => {
  return state[StoreNameSpace.ALL_HOTELS].hotels.find((item)=>{
    return item.id === id;
  });
};

const selectAllPlaces = (state) => {
  return state[StoreNameSpace.ALL_HOTELS].hotels;
};

const selectLoading = (state) => {
  return state[StoreNameSpace.ALL_HOTELS].loading;
};

const selectNearbyPlaces = (state) => {
  return state[StoreNameSpace.ALL_HOTELS].nearHotels;
};

export {selectCities, selectHotelById, selectAllPlaces, selectLoading, selectNearbyPlaces};
