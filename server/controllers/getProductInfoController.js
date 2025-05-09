import models, { sequelize } from "../models/index.js";
export default async (req, res) => {
  try {
    const result = await models.Product.findByPk(req.params.id, {
      //   attributes : {
      //     include : [
      //         [sequelize.literal('SELECT AVG() FROM product_reviews WHERE ')]
      //     ]
      //   },
      attributes: {
        include: [
          [
            sequelize.literal(`(
            SELECT ROUND(AVG("rating"),2)
            FROM "product_reviews"
            WHERE "product_reviews"."product_id" = "Product"."id")
            `),
            "rating",
          ],
          [
            sequelize.literal(`(
            SELECT COUNT(*)
            FROM "product_reviews"
            WHERE "product_reviews"."product_id" = "Product"."id"
            )`),
            "rating_count",
          ],
          [
            sequelize.literal(`(
            SELECT EXISTS(
              SELECT 1 FROM "favorites"
              WHERE "favorites"."product_id" = "Product"."id"
              AND "favorites"."user_id" = ${req.user?.user_id || 0}
            )
            )`),
            "is_favorite",
          ],
        ],
      },
      include: [
        {
          model: models.ProductImage,
          as: "images",
        },
      ],
    });
    res.status(200).json(result);
  } catch (err) {
    console.log("Error getting product info : ", err);
    res.status(500);
  }
};
