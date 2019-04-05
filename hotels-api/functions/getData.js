const fs = require('fs');

module.exports = {
    getData: function (){
        var fileContents;
        try {
            fileContents = fs.readFileSync('./data.json');
        } catch (err) {
            if (err.code === 'ENOENT') {
                //FNF = File not found
                return 'FNF';
            } else {
                return 'ERROR';
            }
        }
        return fileContents;
        //return fs.readFileSync('./data.json');
    }
};
