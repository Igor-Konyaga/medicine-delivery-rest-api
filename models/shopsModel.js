const { model, Schema } = require("mongoose");

const shopsSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true, versionKey: false }
);

const Shops = model("Shops", shopsSchema);

module.exports = Shops;
