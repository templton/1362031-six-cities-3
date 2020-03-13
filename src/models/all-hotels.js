class AllHotels {
  static toFrontendModel(hotels) {
    return hotels.map((item)=>{
      const city = {...item.city, id: item.city.name};
      return {...item, city};
    });
  }
}

export {AllHotels};
