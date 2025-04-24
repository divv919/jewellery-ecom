import models from "../models/index.js";

export const getFavorite = async (req, res) => {
  try {
    const result = await models.Favorite.findAll({
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

export const postFavorite = async (req, res) => {
  const item_id = req.params.item_id;
  try {
    const result = await models.Favorite.create({
      user_id: req.user.user_id,
      product_id: item_id,
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    return;
  }
};

export const deleteFavorite = async (req, res) => {
  const item_id = req.params.item_id;
  try {
    const result = await models.Favorite.destroy({
      where: { user_id: req.user.user_id, product_id: item_id },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    return;
  }
};
export const deleteAllFavorites = async (req, res) => {
  try {
    const result = await models.Favorite.destroy({
      where: { user_id: req.user.user_id },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    return;
  }
};

// export const putFavorites = async () => {};
