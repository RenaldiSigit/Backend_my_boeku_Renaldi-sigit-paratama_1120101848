module.exports = {
  routes: [
     {
      method: 'GET',
      path: '/buku',
      handler: 'buku.findAll',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
