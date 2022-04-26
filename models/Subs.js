const { Schema, model } = require("mongoose");

// this is the substitute profile and each one belongs to a user.
// Subtitutes create a user identity for login above and then create a profile that schools can view below here.
// These objects are that viewable profile

const SubstituteSchema = new Schema({
  subName: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  subEmail: {
    type: String,
    required: true,
    trim: true,
  },
  subPhoneNumber: {
    type: Number,
  },
  subAvailability: {
    type: String,
    lowercase: true,
    // enum: {
    //     values: ["m", "t", "w", "th", "f"],
    //     message: "{VALUE} is not supported. Please enter letter abbreviation only"
    // }
  },
  subZipCode: {
    type: Number,
    required: true,
  },
  subTravelRadius: {
    type: Number,
  },
  subSpecialty: {
    type: String,
    trim: true,
  },
  attachedUser: {
      type: Schema.Types.ObjectId,
      ref: "User"
  }
});

const Substitute = model("Substitute", SubstituteSchema);

module.exports = Substitute;
