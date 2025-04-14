import models from "../models/index.js";
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
    res.status(200).json({
      reviews,
      currentPage: page,
      perPage: limit,
      totalPages: Math.ceil(totalReviews / limit),
    });
  } catch (err) {
    console.error("Error getting reviews data : ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
