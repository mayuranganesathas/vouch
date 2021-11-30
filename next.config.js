module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  env: {
    HASURA_ADMIN_SECRET: process.env.HASURA_ADMIN_SECRET,
  },
};
