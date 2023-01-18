'use strict';

/**
 * A set of functions called "actions" for `buku`
 */

module.exports = {
  findAll:async (ctx, next) =>{
    try {
      const data = await strapi.entityService.findMany("api::item.item", {
        fields : ["nama","deskripsi"],
        populate:{
          gambar: {
            fields: ["formats","url"],
          },
           kategoris:{
             fields: ["nama","deskripsi"],
           },
           harga:true,
        },
      });
      return data;
    }   catch(err) {
      ctx.body = err;
    }
  }
};
