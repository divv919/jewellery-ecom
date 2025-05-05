import { Op } from "sequelize";
import { sequelize } from "../db/index.js";
import models from "../models/index.js";

export const getProducts = async (req, res) => {
  try {
    let { categoryName, categoryType } = req.params;
    const { price, sort, page, ...filters } = req.query;

    const limit = 12;
    const offset = limit * (page - 1);

    let orderClause = [];
    if (sort == "price_asc") {
      orderClause.push(["price", "ASC"]);
    }
    if (sort == "price_desc") {
      orderClause.push(["price", "DESC"]);
    }

    let priceFilter = {};

    if (price !== undefined) {
      let queryRangeArray = Array.isArray(price) ? price : [price];

      const priceConditions = queryRangeArray.map((range) => {
        const [min, max] = range.split("-");
        return {
          price: { [Op.between]: [min, max] },
        };
      });

      if (priceConditions.length) {
        priceFilter = { [Op.or]: priceConditions };
      }
    }

    const whereClause = {
      [categoryType]: categoryName,
      ...priceFilter,
      ...filters,
    };

    const count = await models.Product.count({
      where: whereClause,
    });
    const result = await models.Product.findAll({
      attributes: ["id", "name", "price"],
      include: [
        {
          model: models.ProductImage,
          as: "images",
          attributes: ["image_url"],
          where: { is_primary: true },
        },
      ],
      limit: limit,
      offset: offset,
      where: whereClause,
      order: orderClause.length ? orderClause : undefined,
    });

    const newResult = result.map((product) => {
      return {
        id: product.id,
        price: product.price,
        name: product.name,
        image: product.images[0]?.image_url || null,
      };
    });
    const favoriteResult = await models.Favorite.findAll({
      where: { user_id: req.user?.user_id || 0 },
    });
    res.status(200).json({
      products: newResult,
      hasMore: count > offset + limit,
      totalItems: count,
      itemsPerPage: limit,
      currentPage: page,
      isFavorite: favoriteResult || [],
    });
  } catch (err) {
    console.error("Error fetching products data : ", err);
    res.status(500);
  }
};
