module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/*.{html,js,css,png,jpg,svg,ico,json}' // Added 'ico' and 'json'
  ],
  swDest: 'build/service-worker.js',
  runtimeCaching: [{
    urlPattern: /\.(?:png|jpg|jpeg|svg|js|css|html|ico|json)$/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'assets-cache',
      expiration: {
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      },
    },
  }],
};
