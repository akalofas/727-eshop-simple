const mongoose = require("mongoose");
 
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserRole',
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false,
        default: 'https://placehold.co/200x200/green/white.webp',
    },
    phone: {
        type: String
    },
    mobile: {
        type: String
    },
    gendre : {
        type: String,
        enum: ['male', 'female']
    },
    birthDate: {
        type: Date
    },
    addresses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }],
    orderHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
    wishlist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wishlist'
    },
    isEmailVerified: {
        type: Boolean,
        default: false,
    },
    emailVerificationToken: {
        token: {
            type: String,
        },
        expires: {
            type: Date,
        },
    },
    passwordResetToken: {
        token: {
            type: String,
        },
        expires: {
            type: Date,
        },
    },
    notificationSettings: {
        byEmail: {
            type: Boolean,
            default: true,
        },
        byPhone: {
            type: Boolean,
            default: true,
        },
        bySMS: {
            type: Boolean,
            default: true,
        },
    },
    lastLogin: {
        type: Date,
    },
    lastPasswordChange: {
        type: Date,
    },
    lastPasswordReset: {
        type: Date,
    },
    lastFailedLogin: {
        type: Date,
    },
    isVendor: {
        type: Boolean,
        default: false,
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)