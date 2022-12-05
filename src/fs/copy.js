import { mkdir, readdir, copyFile, constants } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const copy = async () => {
    try {
        const isFilesFolder = existsSync('./src/fs/files/')
        if (!isFilesFolder) {
            throw "FS operation failed (existsSync())"
        }
        await mkdir('./src/fs/files_copy/', { recursive: false }).catch((err) => {
            throw "FS operation failed (mkdir())";
        }
        );
        const files = await readdir('./src/fs/files/').catch((err) => {
            throw "ERROR readdtr";
        })
        for (const file of files) {
            copyFile(`./src/fs/files/${file}`, `./src/fs/files_copy/${file}`, constants.COPYFILE_EXCL).catch((err) => {
                throw "File exist";
            }
            );
        }
    } catch (error) {
        console.error(error)
    }
};

await copy();
