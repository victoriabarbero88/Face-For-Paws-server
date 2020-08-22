const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String, default: "" },
    location: {
      type: String,
      enum: ["Barcelona", "Girona", "Tarragona", "Lleida"],
    },
    description: { type: String },
    myPets: [
      {
        name: String,
        photo: { type: String, default: "" },
      },
    ],
    state: [
      {
        type: String,
        enum: [
          "Adopt",
          "Sponsor",
          "Foster Home",
          "Animal Watcher",
          "Dog Walker",
        ],
      },
    ],
    pet: [{ type: mongoose.Types.ObjectId, ref: "Pet" }],
    myFavPets: [{ type: mongoose.Types.ObjectId, ref: "Pet" }],
    message: [{}],
    feed: [{ type: mongoose.Types.ObjectId, ref: "Feed" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
