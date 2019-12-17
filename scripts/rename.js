var glob = require("glob"),
  path = require("path"),
  fs = require("fs");

glob("./lib/**/*.+(web|native).+(js|ts|tsx)", function(err, files) {
  var processed = 0;
  console.error(err);
  console.log(files);
  files.forEach(function(file) {
    var dir = path.dirname(file);
    var filename = path.basename(file);

    console.log(dir, filename);

    const parts = filename.split(".");
    const realExt = parts.pop();
    parts[parts.length - 1] = realExt;
    fs.renameSync(file, dir + "/" + parts.join("."));
    processed++;
  });
  console.log(processed + " files processed");
});
