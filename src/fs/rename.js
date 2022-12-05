import { rename as fsRename } from "node:fs"
import { existsSync } from "fs"


const rename = async () => {
    try {
        const filePath_1 = './src/fs/files/wrongFilename.txt'
        const filePath_2 = './src/fs/files/properFilename.md'
        if (!existsSync(filePath_1) || existsSync(filePath_2)) {
            throw "FS operation failed (existsSync)"
        }
        fsRename(filePath_1, filePath_2, (err) => {
            if (err) throw "Rename failed!";
            console.log('Rename complete!');
        });
    } catch (error) {
        console.error(error)
    }
};

await rename();