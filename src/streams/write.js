// Функция, которая записывает данные process.stdin  в содержимое файла fileToWrite.txt , используя Writable Stream
import { createWriteStream } from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const write = async (fileNameToWrite = '') => {
    try {
        const FILE_PATH = path.join(__dirname, 'files', fileNameToWrite)
        // { flags: 'a' } - дописывает содержимое, а не перезаписывет (если без флага)
        await pipeline(process.stdin, createWriteStream(FILE_PATH, { flags: 'a' }))
    } catch (error) {
        throw new Error(error)
    }
};

await write('fileToWrite.txt');