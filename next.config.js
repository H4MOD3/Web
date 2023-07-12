const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  images: {
    domains: [ "cdn.discordapp.com", "i.imgur.com", "localhost:3000", "" ]
},
async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/ka',
        permanent: true,
      },
    ]
  }
});