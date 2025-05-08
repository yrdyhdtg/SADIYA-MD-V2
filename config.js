const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SADIYA-MD=2Zdy2QRQ#vpxR56657eddEkpJ_sdI0_oXUQ6d0W7hTrtJZqSHZGc", //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || "yrdyhdtg", //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "bL1ZaGp0cmrR40mUBlNx91VYBOTNU14f4J9M", //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || "SADIYA-MD-DATABASE", //Bot Database Repo Name
SESSION_NAME: process.env.SESSION_NAME || "session"
};
