const serverDataToFrontData = (data) => {
  return data.map((it) => {
    it.city.id = it.city.name;
    return it;
  });
};

export {serverDataToFrontData};
