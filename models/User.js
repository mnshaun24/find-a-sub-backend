// This is the user login in formation and has the Subs profile as a sub document.
// These are for user login and registration. None of this information is meant to be seen by schools

const { Schema, model } = require("mongoose");

const UserAccountSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  subProfile: {
    type: Schema.Types.ObjectId,
    ref: "Sub"
  }
});

const SubAccount = model("User", UserAccountSchema);

module.exports = SubAccount;
