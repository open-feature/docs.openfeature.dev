const fse = require('fs-extra');
const path = require('path');

/**
 * The external content Docusaurus plugin moves files as a prebuild
 * step.
 *
 * @example in docusaurus.config.js
 * const externalContentPlugin = require('./src/plugins/external-content');
 *
 * const config = {
 *   ...
 *   plugins: [
 *     ...
 *     [externalContentPlugin, {
 *       "name": "spec",
 *       "sourcePath": "specification/specification",
 *       "destinationPath": "specification"
 *     }]
 *  ]
 * }
 */
module.exports = async function externalContent(context, options) {
  const { name, sourcePath, destinationPath, clearDestinationBeforeCopy = true } = options;

  if (typeof name !== 'string') {
    throw new Error("'name' must he passed as a string in the options");
  } else if (typeof sourcePath !== 'string') {
    throw new Error("'sourcePath' must he passed as a string in the options");
  } else if (typeof destinationPath !== 'string') {
    throw new Error("'destinationPath' must he passed as a string in the options");
  }
  console.log(`Copying external content for '${name}'.`);
  const src = path.join(context.siteDir, 'external-content', sourcePath);
  const dest = path.join(context.siteDir, 'docs', destinationPath);

  if (clearDestinationBeforeCopy) {
    await fse.emptyDir(dest);
  }

  await fse.copy(src, dest);

  return {
    name: `external-content-${name}`,
  };
};
