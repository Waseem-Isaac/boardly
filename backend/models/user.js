// User model with basic fields and timestamps
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:                   { type: String, required: true, trim: true },
  email:                  { type: String, required: true, unique: true, trim: true, lowercase: true },
  password:               { type: String, select: false },
  active:                 { type: Boolean, default: false },
  invitationToken:        { type: String, select: false },   // stored as SHA-256 hash
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;