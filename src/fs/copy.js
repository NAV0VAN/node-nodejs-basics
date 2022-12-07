/**
 *  Копирование файлов из папки files в папку files_copy того же уровня вложенности
 */
import * as path from 'path'
import { mkdir, readdir, copyFile, constants } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import * as url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const folderNameFrom = `${__dirname}/files`
const folderNameTo = `${__dirname}/files_copy`

const copy = async () => {
    try {
        if (existsSync(folderNameTo)) {
            throw new Error("FS operation failed (existsSync())")
        }
        mkdir(folderNameTo, { recursive: false }).catch((err) => {
            throw new Error('FS operation failed (mkdir())');
        }
        );
        const files = await readdir(folderNameFrom).catch((err) => {
            throw new Error('ERROR readdtr');
        })
        for (const file of files) {
            let pathFrom = `${folderNameFrom}/${file}`
            let pathTo = `${folderNameTo}/${file}`
            copyFile(pathFrom, pathTo, constants.COPYFILE_EXCL).catch((err) => {
                throw new Error('File exist');
            }
            );
        }
    } catch (error) {
        console.error(error)
    }
};

await copy();
