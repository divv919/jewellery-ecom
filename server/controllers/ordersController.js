import models from "../models/index.js";

export const getOrders = async (req, res) => {
  try {
    const result = await models.Order.findAll({
      where: {
        user_id: req.user.user_id,
      },
      include: [
        {
          model: models.Product,
          as: "product",
          include: [
            {
              model: models.ProductImage,
              as: "images",
              where: { is_primary: true },
            },
          ],
        },
      ],
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const postOrders = async (req, res) => {
  try {
    const result = await models.Order.create({
      user_id: req.user.user_id,
      product_id: req.params.item_id,
      quantity: req.params.quantity,
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// export const deleteOrders = async () => {};

// export const putOrders = async () => {};
