import models from "../models/index.js";

export const getAccountInfo = async (req, res) => {
  try {
    const result = await models.AccountInfo.findAll({
      where: { user_id: req.user.user_id },
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const postAccountInfo = async (req, res) => {
  const newValue = req.body;
  try {
    const newInfo = await models.AccountInfo.create({
      user_id: req.user.user_id,
      ...newValue,
    });
    res.status(200).json(newInfo);
  } catch (err) {
    console.error("Couldn't add accountInfo ");
    res.status(500).json(err);
  }
};

export const putAccountInfo = async (req, res) => {
  const toUpdate = req.body;
  console.log(req.body);
  try {
    const updatedInfo = await models.AccountInfo.update(toUpdate, {
      where: { user_id: req.user.user_id },
    });
    res.status(200).json(updatedInfo);
  } catch (err) {
    console.error("Couldn't update accountInfo ");
    res.status(500).json(err);
  }
};
