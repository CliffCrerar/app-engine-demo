
const tempOne = JSON.parse(require('fs').readFileSync('package.json').toString())

require('fs').writeFileSync('./.vscode/'+'package-backup');
        
tempOne.scripts.var = "APP_NAME=<app name>,PROJECT_ID=<project id>";

require('fs').writeFileSync('./package.json',JSON.stringify(tempOne),'utf8')

console.log('test: ', tempOne);