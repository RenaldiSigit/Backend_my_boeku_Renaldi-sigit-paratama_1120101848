"use strict";

/**
 * item controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::item.item", ({ strapi }) => ({
  async find(ctx) {
    try {
      const data = await strapi.entityService.findMany("api::item.item", {
        fields: ["nama", "deskripsi", "detail"],
        populate: {
          gambar: {
            fields: ["formats", "url"],
          },
          kategoris: {
            fields: ["nama", "deskripsi"],
          },
          harga: true,
        },
      });
      return data;
    } catch (err) {
      ctx.body = err;
    }
  },
}));
