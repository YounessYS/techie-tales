const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: {
        values: [
          "Agriculture",
          "Business",
          "Education",
          "Entertainment",
          "Art",
          "Investment",
          "Uncategorised",
          "Weather",
        ],
        message: "{VALUE} is not a supported category",
      },
    },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);
