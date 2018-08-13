#!/usr/bin/env node

//define stuff
var fs = require('fs');

// Assign directory name to variable
var lintingFolder = process.argv[2]

//Check if directory is set.
if(!lintingFolder)
{
    console.error("Provide a directory name to scan for JSON files!!")
    process.exit(1)
}

//Check if directory exists.
if (!fs.existsSync(lintingFolder)) {
    console.error(lintingFolder + ' is not a valid directory.')
    process.exit(1)
}

fs.readdir(__dirname + '/' + lintingFolder, (err, files) => {
	files.forEach(file => {
		try{

			tempJS  = fs.readFileSync(lintingFolder + "/" + file);
            temp    = JSON.parse(tempJS);
            
            console.log( file + " OK")

		}catch(ex){
            console.error(file + " FAILED: " + ex);
            process.exit(1)
		}
	});
})
