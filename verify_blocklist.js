const { SecurityValidator } = require("./dist/safe-fs/SecurityValidator.js");
const v = new SecurityValidator();
for (const f of ["id_rsa.pem","server.key","app_secret.json","api_token.txt","normal.ts"])
  console.log((v.isFileBlocked(f) ? "BLOCKED" : "ALLOWED") + "  " + f);
