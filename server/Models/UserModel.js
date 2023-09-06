import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true // Moved inside the schema definition
    }
);

const userModel = mongoose.model('users', userSchema);
export default userModel;