import { existsSync } from "fs";
import { readdir } from "fs/promises"

const folderPath = './src/fs/files'

const list = async (folderPath) => {
    try {
        if (existsSync(folderPath)) {
            const files = await readdir(folderPath);
            for (const file of files)
                console.log(file);
        } else {
            throw "FS operation failed (directory is missing)"
        }
    } catch (err) {
        console.error("ERROR: ", err);
    }
};

await list(folderPath);