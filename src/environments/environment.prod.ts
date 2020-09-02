export const environment = {
  production: true,
  firebase: {
    config: {
      apiKey: '<API_KEY>',
      authDomain: '<AUTH_DOMAIN>',
      databaseURL:  '<DATABASE_URL>',
      projectId: '<PROJECT_ID>',
      storageBucket: '<STORAGE_BUCKET>',
      messagingSenderId: '<MESSAGE_SENDER_ID>',
      appId: '<APP_ID>',
      measurementId: '<MEASUREMENT_ID>',
    },
    analytics: {
      sendPageViews: true
    }
  },
  contentful: {
    spaceId: '<SPACE_ID>',
    accessToken: '<ACCESS_TOKEN>',
  }
};
