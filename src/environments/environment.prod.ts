export const environment = {
  production: true,
  sso_api_username: '',
  sso_api_pwd: '',

  loginURL: 'https://demo-openam.auth.us-east-1.amazoncognito.com/login?' +
              'client_id=<client_id>&response_type=code&scope=openid+profile&' +
              'redirect_uri=http://localhost:4300/callback',

  redirectURL: 'http://localhost:4300/callback',

  cognitoTokenURL: 'https://demo-openam.auth.us-east-1.amazoncognito.com/oauth2/token',

  logout: 'https://demo-openam.auth.us-east-1.amazoncognito.com/logout?' +
          'client_id=<client_id>&' +
          'logout_uri=http://localhost:4300/home'
};
