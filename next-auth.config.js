// next-auth.config.js

export default {
  providers: [
    {
      id: 'google',
      name: 'Google',
      type: 'oauth',
      version: '2.0',
      scope: 'email profile',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    // Add other providers as needed
  ],
};
