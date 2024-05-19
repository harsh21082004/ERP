import { Schema, model } from 'mongoose';

const userAuthSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    twitterId: {
      type: String,
      required: true,
      unique: true,
    },
    twitterHandle: {
      type: String,
      required: true,
      unique: true,
    },
    farmData: {
      type: Object,
      default: {},
    },
    twitterTokens: {
      accessToken: {
        type: String,
        required: true,
      },
      accessTokenSecret: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default model('UserAuth', userAuthSchema);
