const { SafeFileSystem } = require("./dist/safe-fs/SafeFileSystem.js");
const root = "C:\\Users\\HP\\Desktop\\wind serf\\akhrot\\mcp\\cursor-reader";
const sfs = new SafeFileSystem([root]);
(async () => {
  const tries = [
    ["absolute outside", "C:\\Windows\\win.ini"],
    ["../ escape       ", root + "\\..\\..\\..\\..\\..\\..\\Windows\\win.ini"],
  ];
  for (const [label, p] of tries) {
    try { const c = await sfs.readFile(p);
          console.log("LEAKED  [" + label + "]:", c.slice(0, 40).replace(/\r?\n/g, " ")); }
    catch (e) { console.log("blocked [" + label + "]:", e.message.split(":")[0]); }
  }
})();
