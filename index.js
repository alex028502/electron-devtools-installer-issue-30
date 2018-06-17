

const installExtension = require('electron-devtools-installer');
const REACT_DEVELOPER_TOOLS = require('electron-devtools-installer').REACT_DEVELOPER_TOOLS;

(async function() {
  await installExtension(REACT_DEVELOPER_TOOLS);
  console.log('ready');
})();
