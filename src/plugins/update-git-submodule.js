const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

module.exports = async function updateSubmodulePlugin(context) {
  try {
    console.log('attempting to update the git submodules');
    await exec(`git --git-dir ${context.siteDir}/.git submodule update --init --recursive`);
  } catch (err) {
    console.err(err);
    throw new Error('Unable to update the required git submodules');
  }

  return {
    name: 'update-git-submodule',
  };
};
