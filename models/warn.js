const mongoose = require('mongoose');

const warn = new mongoose.Schema({
    manID: { type: String, required: true },
    serverID: { type: String, required: true },
    moderator: { type: String, required: true },
    date: { type: String, required: true },
    reason: { type: String, required: true },
})

const Warn = module.exports = mongoose.model('warn', warn)