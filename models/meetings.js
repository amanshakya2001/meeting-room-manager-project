const { Schema, model } = require("mongoose");   

const meetingSchema = new Schema({
    room: {
        type: Schema.Types.ObjectId,
        ref: "Room",
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    candidates: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
            isAccepted: {
                type: Boolean,
                default: false,
            },
        }
    ],
    reason: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    isApproved: {
        type: Boolean,
        default: false,
    },
},{
    timestamps: true,
});

const Meeting = model("Meeting", meetingSchema);

module.exports = Meeting;