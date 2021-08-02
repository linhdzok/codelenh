module.exports.config = {
    name: "lắc mông",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Loi",
    description: " HÔM NAY TRỜI ĐẸP THẾ NHỜ .... Ỏ ỏ ỏ'ỏ''",
    commandCategory: "Không cần dấu lệnh",
    usages: "lắc mông",
    cooldowns: 0,
    denpendencies: {
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "lắcmông.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/227478675_3998739260252817_7947845461826378764_n.mp4/video-1627870180.mp4?_nc_cat=105&ccb=1-3&_nc_sid=060d78&_nc_ohc=wUeloH377A8AX8zwx8_&vabr=668708&_nc_ht=video.xx&oh=efab1d8e8762dff98fc6434261c1b1a3&oe=6108923C&dl=1").pipe(fs.createWriteStream(dirMaterial + "lắcmông.mp4"));
}
module.exports.handleEvent = async ({ event, api, Currencies, Users, args, utils, global, client }) => {
    const fs = require("fs");
    let dt = await api.getUserInfo(event.senderID);
    let name = dt[event.senderID].name;
    var msg = {
        body: `  `,
        attachment: fs.createReadStream(__dirname + `/noprefix/lắcmông.mp3`)
    }
    if (event.body.toLowerCase() == "lắcmông") {
        return api.sendMessage(msg, event.threadID, event.messageID);
    }
};
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
    return api.sendMessage("Dùng sai cách rồi lêu lêu", event.threadID)
}
