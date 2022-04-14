const { Schema, model } = require("mongoose");

const SubAccountSchema = new Schema({
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
});

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

const SubAccount = model("User", SubSchema);

module.exports = SubAccount;
