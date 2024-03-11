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
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      accessTokenUrl: 'https://accounts.google.com/o/oauth2/token',
      profileUrl: 'https://www.googleapis.com/oauth2/v3/userinfo',
      profile: (profile) => {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
      // Specify your callback URL here
      callbackUrl: 'http://localhost:3000/api/auth/callback/google',
    },
    // Add other providers as needed
  ],
};
