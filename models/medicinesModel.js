const { model, Schema } = require("mongoose");

const medicinesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "Shops",
    },
  },
  { timestamps: true, versionKey: false }
);

const Medicines = model("Medicines", medicinesSchema);

module.exports = Medicines;
