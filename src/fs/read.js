import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';

const filePath = './src/fs/files/fileToRead.txt'

const read = async (filePath) => {
    try {
        if (existsSync(filePath)) {
            const contents = await readFile(filePath, { encoding: 'utf8' });
            console.log(contents);
        } else {
            throw "FS operation failed (file is missing)"
        }
    } catch (err) {
        console.error("ERROR: ", err);
    }
};

await read(filePath);