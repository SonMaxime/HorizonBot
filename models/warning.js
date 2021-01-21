const mongoose = require('mongoose')

const warningModel = mongoose.Schema({
    guildId: String,
    userId: String,
    moderatorId: String,
    reason: String,
    timestamp: Number,
})

module.exports = mongoose.model('Warning', warningModel)