import { Schema, model } from "mongoose";

const baeDataSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("BaeData", baeDataSchema);
