const fs = require("fs");
const path = require("path");
const promptDirectory = require("inquirer-directory");
const componentGenerator = require("./component/index.js");

function getRelativePath(source, target) {
  const sep = source.indexOf("/") > -1 ? "/" : "\\";
  const targetArr = target.split(sep);
  const sourceArr = source.split(sep);
  const filename = targetArr.pop();
  const targetPath = targetArr.join(sep);
  let relativePath = "";

  while (targetPath.indexOf(sourceArr.join(sep)) === -1) {
    sourceArr.pop();
    relativePath += `..${sep}`;
  }

  const relPathArr = targetArr.slice(sourceArr.length);

  if (relPathArr.length) relativePath += relPathArr.join(sep) + sep;

  return relativePath + filename;
}

module.exports = plop => {
  plop.setPrompt("directory", promptDirectory);
  plop.setGenerator("component", componentGenerator);
  plop.addHelper("directory", comp => {
    try {
      fs.accessSync(path.join(__dirname, `../../containers/${comp}`), fs.F_OK);

      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper("curly", (object, open) => (open ? "{" : "}")); // eslint-disable-line
  plop.addHelper("centerviewPath", target => {
    const fullTargetPath = path.resolve("./", target);
    const fullCenterViewPath = path.resolve("./", "src/CenterView");
    const relativePath = getRelativePath(fullTargetPath, fullCenterViewPath);

    return `../${relativePath}`; // go back an extra dir because target above doesn't include what is being generated.
  });
};
