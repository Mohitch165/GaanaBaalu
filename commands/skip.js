const sendError = require("../util/error");

module.exports = {
  info: {
    name: "skip",
    description: "To skip the current music",
    usage: "",
    aliases: ["s"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel
    if (!channel)return sendError("Voice channel vaa thala modhala", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("Onnume odala ennatha skip panradhu", message.channel);
    serverQueue.connection.dispatcher.end("Skiped the music");
    message.react("✅")
  },
};