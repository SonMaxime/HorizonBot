const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config");

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  prefix: {
    "type": String,
    "default": defaults.prefix
  },
  logChannelID: {
    "type": Number,
    "default": defaults.logChannel
  },
  welcomeMessage: {
    "type": String,
    "default": defaults.welcomeMessage
  },
  leaveMessage:{
    "type": String,
    "default": defaults.leaveMessage
  },
  welcomeChannelID: {
    "type": Number,
    "default": defaults.welcomeChannel
  }
});

module.exports = mongoose.model("Guild", guildSchema);