'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
    async create (ctx) {
        const { data } = ctx.request.body;
        data.author = ctx.state.user.id;
        const response = await strapi.entityService.create(
            "api::article.article",
            {
                data:data,
            }
        );
        return {response}
    },
    async delete (ctx) {
        const { data } = ctx.request.body;
        // data.author = ctx.state.user.id;
        const author = await strapi.entityService.findOne('api::article.article', ctx.params.id, {
            populate: { author : true},
        });
        console.log(ctx.params.id)
        if (author.author.id = ctx.state.user.id){
            console.log(author.author)
            const response = await strapi.entityService.delete(
                "api::article.article",
                ctx.params.id,
                {
                    data: data,
                }
            );
            return {response}
        }
        else {
            ("This comment does not belong to you !!")
        }
    },
}));
