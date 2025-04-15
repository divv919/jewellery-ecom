import models, { sequelize } from "../models/index.js";
export default async (req, res) => {
  const { id } = req.params;
  const { page } = req.query;
  const limit = 4;
  const offset = (page - 1) * limit;

  try {
    const reviews = await models.ProductReview.findAll({
      where: { product_id: id },
      limit: limit,
      offset: offset,
      order: [["created_at", "DESC"]],

      include: [
        {
          model: models.User,
          as: "user",
          attributes: ["created_at", "username", "first_name", "last_name"],
        },
      ],
    });
    const totalReviews = await models.ProductReview.count({
      where: { product_id: id },
    });

    const allReviews = await models.ProductReview.findAll({
      where: { product_id: id },
      attributes: [
        "rating",
        [sequelize.fn("COUNT", sequelize.col("rating")), "count"],
      ],
      group: "rating",
    });

    const reviewDistribution = Array(5).fill(0);
    allReviews.forEach((review) => {
      reviewDistribution[5 - review.dataValues.rating] = Number(
        review.dataValues.count
      );
    });

    res.status(200).json({
      reviews,
      currentPage: page,
      perPage: limit,
      reviewDistribution: reviewDistribution,
      totalPages: Math.ceil(totalReviews / limit),
    });
  } catch (err) {
    console.error("Error getting reviews data : ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
