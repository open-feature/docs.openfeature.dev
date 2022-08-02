const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

let submoduleUpdated = false;
module.exports = async function updateSubmodulePlugin() {
  if (!submoduleUpdated) {
    console.log('attempting to update the git submodules');
    const { stderr } = await exec(`git submodule update --init --recursive`);
    if (stderr) {
      throw new Error(`Error pulling submodule: ${stderr}`);
    }
    submoduleUpdated = true;
  }

  return {
    name: 'update-git-submodule',
  };
};
