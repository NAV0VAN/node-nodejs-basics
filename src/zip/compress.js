// Функция, которая сжимает файл fileToCompress.txt в архив archive.gz с использованием zlib и Streams API
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { FILE_PATH, ARCHIVE_PATH } from './constants.js'

const gzip = createGzip();
const source = createReadStream(FILE_PATH);
const destination = createWriteStream(ARCHIVE_PATH);

const compress = async () => {
    await pipeline(source, gzip, destination).catch((err) => {
        throw new Error('Сompression error', err)
    });
};

await compress();