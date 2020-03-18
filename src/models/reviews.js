class Reviews {
  static toFrontendModel(data) {
    return data.map((item)=>{
      return {
        id: item.id,
        avatar: item.user.avatar_url,
        userName: item.user.name,
        timestamp: item.date,
        comment: item.comment,
        rating: item.rating
      };
    });
  }
}

export {Reviews};
