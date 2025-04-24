import models from "../models/index.js";
export const getCartItem = async (req, res) => {
  try {
    const result = await models.Cart.findAll({
      where: { user_id: req.user.user_id },
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
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    return;
  }
};

export const postCartItem = async (req, res) => {
  try {
    const item_id = req.params.item_id;
    const productExists = await models.Cart.findAll({
      where: { user_id: req.user.user_id, product_id: item_id },
    });

    if (productExists?.length > 0) {
      const result = await models.Cart.update(
        { quantity: productExists[0].dataValues.quantity + 1 },
        {
          where: {
            user_id: req.user.user_id,
            product_id: item_id,
          },
        }
      );
      res.status(200).json(result);
    } else {
      const result = await models.Cart.create({
        product_id: item_id,
        user_id: req.user.user_id,
        quantity: 1,
      });
      res.status(200).json(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const deleteAllCartItems = async (req, res) => {
  try {
    const result = await models.Cart.destroy({
      where: { user_id: req.user.user_id },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const result = await models.Cart.destroy({
      where: { product_id: req.params.item_id, user_id: req.user.user_id },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const putCartItem = async (req, res) => {
  try {
    const item = await models.Cart.findOne({
      where: {
        product_id: req.params.item_id,
        user_id: req.user.user_id,
      },
    });
    if (req.params.increment) {
      const result = await models.Cart.update(
        { quantity: item.quantity + 1 },
        {
          where: {
            product_id: req.params.item_id,
            user_id: req.user.user_id,
          },
        }
      );
      res.status(200).json(result);
      return;
    }
    const result = await models.Cart.update(
      { quantity: item.quantity - 1 },
      {
        where: {
          product_id: req.params.item_id,
          user_id: req.user.user_id,
        },
      }
    );
    res.status(200).json(result);
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    return;
  }
};
