const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_34_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUyLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgODcsXG4gICAgICAgIDg5LFxuICAgICAgICAzNixcbiAgICAgICAgMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDg3LFxuICAgICAgICA3MixcbiAgICAgICAgNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MixcbiAgICAgICAgMjQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgODIsXG4gICAgICAgIDE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1LFxuICAgICAgICA2NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDg1LFxuICAgICAgICA3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDkyLFxuICAgICAgICA2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMkJyN1pENDBBVmpYT1haQnI3b0Y0YUxwNHJ2cTRUamN2RjdDY3UrYmtUOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3ODk4MTAwNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg2RUU2NUEwNzdERkVENDA5RDhDNzZBOUQzQkY1RkNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjk2MjA0MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Njc4OTgxMDA0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0M3RjBENzZGQjI3OTVCODg0N0M0MEQwMUMyRkYwRDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyOTYyMDQyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIng0ejlIQ3RlUnZPZlY2VmxEODM3NFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTQ4ZWFmMWQtNmQ4Yi00Mzc4LWI3NmUtY2QwZGY1ZmI4ZDVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICA3NCxcbiAgICAgIDEzOCxcbiAgICAgIDUzLFxuICAgICAgMjQ0LFxuICAgICAgNTAsXG4gICAgICAzMyxcbiAgICAgIDEwNCxcbiAgICAgIDExLFxuICAgICAgMTU5LFxuICAgICAgMTg4LFxuICAgICAgMTA3LFxuICAgICAgMTE1LFxuICAgICAgMTAxLFxuICAgICAgMTkzLFxuICAgICAgMTIxLFxuICAgICAgMTAsXG4gICAgICAxNzEsXG4gICAgICAyMTIsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgMTE4LFxuICAgICAgMTMxLFxuICAgICAgNzcsXG4gICAgICAxNjYsXG4gICAgICA1OCxcbiAgICAgIDEwNixcbiAgICAgIDQxLFxuICAgICAgMTExLFxuICAgICAgMTk3LFxuICAgICAgODEsXG4gICAgICAxNjgsXG4gICAgICAxNTcsXG4gICAgICAyMDksXG4gICAgICAyMixcbiAgICAgIDI0NCxcbiAgICAgIDI1MyxcbiAgICAgIDE1NixcbiAgICAgIDEyNixcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxQ1ZLN0oySFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2Nzg5ODEwMDQzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NTcwNzQwNjExOTExODo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkYHwnZC48J2Ri/CdkLTiloEg4paCIOKWhCDiloUg4paGIOKWhyDilohcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTDhvSFFROEtESnRRWVlCQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjh5bTd0d0VWVCtyRHdPS1plSFppbTFic3QrSXlSQ2VYNEMxcWhidHJvMlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTk5FcGZ1c3U4cnJFWHc3bGxvczhYRlBuM0JFQjlqS2pXZHhsbWVQZzdXNzUwN0F3a0JTQ2FWWmxkRXdseGQya1p6YVIxV3NUMS8xM0UzZ0JZTFhCQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS2U5c3JXdDFJK3YvdVkvSmZaaXZRZnZMMytqQUp5ejRFNEFZTlQyRGtMOGYxS2Q3LzJDN1pPaGh0Q3g0VmhBL1dHZks4dVpKbVN1R2J3aUdGazRZZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzg5ODEwMDQzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTYyMDM2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDIwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEMjAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPUWp3N0lFK3gvajhpbEtnQ09OWU1qNFFiOG1Za05rK3o4VUg1NDNhWXRNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0MzgwOTgxMCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyOTIyNjM5MjY4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
