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
            enum: {
                values: ["m", "t", "w", "th", "f"],
                message: "{VALUE} is not supported. Please enter letter abbreviation only"
            }
        },
        subZipCode: {
            type: Number,
            min: [5, "please input 5 digit zip code"],
            max: [5, "please input 5 digit zip code"],
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