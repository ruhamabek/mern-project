import express from "express";
import multer from "multer";
import myRestaurantController from "../controllers/MyRestaurantController";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post(
  "/",
  upload.single("imageFile"),
  myRestaurantController.createMyRestaurant
);
