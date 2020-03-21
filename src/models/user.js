class User {
  static toFrontendModel(data) {
    return {
      ...data,
      avatarUrl: data.avatar_url,
      // eslint-disable-next-line
      avatar_url: undefined,
      isPro: data.is_pro,
      // eslint-disable-next-line
      is_pro: undefined,
    };
  }
}

export {User};
