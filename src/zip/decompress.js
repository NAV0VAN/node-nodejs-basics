
// Функция, которая распаковывает  архив archive.gz в файл fileToCompress.txt с использованием zlib и Streams API
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { FILE_PATH, ARCHIVE_PATH } from './constants.js'

const gzip = createGunzip();
const source = createReadStream(ARCHIVE_PATH);
const destination = createWriteStream(FILE_PATH);

const decompress = async () => {
    await pipeline(source, gzip, destination).catch((err) => {
        throw new Error('Сompression error', err)
    });
};

await decompress();