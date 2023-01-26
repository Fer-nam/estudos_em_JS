const fs = require('fs').promises;
const path = require ('path');

 async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);

}

async function walk(files, rootDir){
    for(let file of files){  
        const fileFullPath = path.resolve(files,rootDir)
     const stats = await fs.stat(fileFullPath);
        
     if(stats.isDirectory()){ 
        readdir(fileFullPath);
        continue; 
    }

     console.log(file, stats.isDirectory());

    }
}

readdir('C:/Users/ferna/OneDrive/Área de Trabalho/js/aprendizado/js_tooling_modulos');
