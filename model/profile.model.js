import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// first let's try stuff without the image
const UserSchema = new mongoose.Schema(
  {
    ID: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    phone: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
  },
  { timestamps: true }
);

// UserSchema.methods.matchPassword = async function (enteredPassword) {
//   let isValidPassword = await bcrypt.compare(enteredPassword, this.password);
//   return isValidPassword;
// };

const User = mongoose.model("User", UserSchema);
export default User;
