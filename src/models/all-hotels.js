class AllHotels {
  static toFrontendModel(hotels) {
    return hotels.map((item)=>{

      // const city = {...item.city, id: item.city.name};
      // return {...item, city};

      return {
        id: item.id,
        city: {...item.city, id: item.city.name},
        image: item.preview_image,
        images: item.images.map((it, id) => ({id, src: it})),
        title: item.title,
        isPremium: item.is_premium,
        rating: item.rating,
        features: item.goods,
        costPerNignt: item.price,
        type: item.type,
        countBedrooms: item.bedrooms,
        countGuest: item.max_adults,
        description: item.description,
        cord: [item.location.latitude, item.location.longitude],
        intoTitle: `intoTitle ???`,
        owner: {
          name: item.host.name,
          avatar: item.host.avatar_url,
          isPro: item.host.is_pro
        }
      };
    });
  }
}

export {AllHotels};
