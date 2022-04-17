module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a707bfb573bce16583dbd9db97222e7b'),
  },
});
