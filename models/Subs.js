// this is the substitute profile model and each one belongs to a user. 
// Subtitutes create a user identity for login and then create a profile that schools can view. 
// This is that viewable profile

const { Schema, model } = require("mongoose");

const SubSchema = new Schema(
    {
        subName: {
            type: String,
            required: true,
            trim: true
        },
        subEmail: {
            type: String,
            required: true,
            trim: true
        },
        subPhoneNumber: {
            type: Number
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
        }

    }
)

const Substitute = model("sub", SubSchema);

module.exports = Substitute;