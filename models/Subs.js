const { Schema, model } = require("mongoose");

const SubSchema = new Schema(
    {
        subName: {
            type: String,
            required: true,
            trim: true
        },
        subAvailability: [],
        subZipCode: {
            type: Number,
            required: true,            
        },
        subTravelRadius: {
            type: Number,
            required: true
        },
        subSpecialty: {
            type: String,
            trim: true,
        }

    }
)

const Substitute = model("subs", SubSchema);

module.exports = Substitute;