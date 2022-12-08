// Функция, которая читает содержимое файла fileToRead.txt с помощью Readable Stream и печатает его содержимое в process.stdout
import { createReadStream } from 'node:fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'node:url';
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const FILE_PATH = path.join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
    pipeline(createReadStream(FILE_PATH, { highWaterMark: 10 }), process.stdout)
};

await read();


// Функция, которая читает содержимое файла fileToRead.txt с помощью Readable Stream
// и печатает его содержимое в console.log по чанкам

// async function readDataFromFile() {
//     try {
//         const readable = createReadStream(FILE_PATH, { highWaterMark: 20 })
//         for await (const chunk of readable) {
//             console.log(`Read ${chunk.length} bytes\n"${chunk.toString()}"\n`);
//         }
//     } catch (error) {
//         throw new Error('ERROR: no read data')
//     }
// }

// readDataFromFile()