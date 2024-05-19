import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    screenName: {
      type: String,
      required: true,
    },
    twitterId: {
      type: String,
      required: true,
      unique: true,
    },
    profileImageUrl: {
      type: String,
    },
    followersCount: {
      type: Number,
    },
    referralId: {
      type: String,
      required: true,
      unique: true,
    },
    invitees: {
      type: [
        {
          user: { type: Schema.Types.ObjectId, ref: 'User' },
          referralPoint: { type: Number, required: true },
        },
      ],
      default: [],
    },
    totalPoint: { type: Number, default: 0 },
    walletAddress: { type: String, required: false },
    multiplier: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
userSchema.virtual('totalBaePoints').get(function () {
  return this.totalPoint * this.multiplier;
});

export default model('User', userSchema);
