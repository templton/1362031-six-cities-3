class User {
  static toFrontendModel(data) {
    return {
      ...data,
      avatarUrl: data.avatar_url,
      avatar_url: undefined,
      isPro: data.is_pro,
      is_pro: undefined,
    };
  }
}

export {User};
