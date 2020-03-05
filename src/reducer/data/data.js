import {ActionType, ActionCreator} from "./actions";
import {ActionCreator as CityListActioCreator} from "../city-list/actions";
import {serverDataToFrontData} from "./model";

const Operation = {
  loadData: () => (dispatch, setState, api) => {
    return api.get(`/hotels`).then((response) => {
      const data = serverDataToFrontData(response.response.data);

      dispatch(ActionCreator.loadData(data));

      // Сразу установить список городов
      const selectedTownCities = [];
      let towns = response.response.data.filter((it) => {
        if (selectedTownCities.indexOf(it.city.name) === -1) {
          selectedTownCities.push(it.city.name);
          return true;
        } else {
          return false;
        }
      });
      towns = towns.map((it) => it.city);
      dispatch(CityListActioCreator.loadCityList(towns));
    });
  }
};

const initialState = {
  data: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return Object.assign({}, state, {data: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation};
