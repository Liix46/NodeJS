const fs = require('fs');
const path = require('path');

console.clear();
console.log(process.argv[2]);

let data = `class ${process.argv[2]}{\n`;

if(process.argv[3] == '-ctor'){
    data += `\tconstructor(){\n\t}`;
}

if(process.argv.length > 4){

    console.log(process.argv.length);

    let parametr4 = process.argv[4];

    if(parametr4.includes('-meth=')){
        let nameMethod = parametr4.replace('-meth=', '');
        console.log(nameMethod);
        data+= `\n\t${nameMethod}(){\n\t}`
    }
}

data += '\n}';

data +=`\n module.export = ${process.argv[2]};`

fs.writeFile(`${process.argv[2]}.js`, data, (err) =>{
    if (err) {
        console.log(err);
        return;
    }
    console.log("file written");
});
console.log("writeFile invoked");

/*
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});
try {
    const data = fs.readFileSync('test.txt', 'utf8');
    console.log(data);
}
catch (err) {
    console.log(err);
}
fs.appendFile('test.txt', 'tratatata', 'utf8',(err) => {
    if (err) {
        console.log(err);
        return;
    }
});
fs.readdir('.', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(files);
});
//fs.rename();
fs.stat('test.txt', (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stats);
});
let res = path.resolve('test.txt');
console.log(res);
res = path.normalize('C:/Windows/../Program Files');
console.log(res);

*/