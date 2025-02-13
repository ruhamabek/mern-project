import { Request, Response } from "express";
import cloudinary from "cloudinary";
import Restaurant from "../models/restaurant";
import mongoose from "mongoose";

const createMyRestaurant = async (req: Request, res: Response) => {
  try {
    const existingRestaurant = await Restaurant.find({
      user: req.userId,
    });
    if (existingRestaurant) {
      res.status(409).json({ message: "user restaurant already exists" });
    }

    const image = req.file as Express.Multer.File;
    const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${base64Image}`;
    const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);

    const restaurant = new Restaurant(req.body);
    restaurant.imageUrl = uploadResponse.url;
    restaurant.lastUpdated = new Date();
    restaurant.user = new mongoose.Types.ObjectId(req.userId);
    await restaurant.save();
    res.status(201).send(restaurant);
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: "something went wrong",
    });
  }
};

export default {
  createMyRestaurant,
};
