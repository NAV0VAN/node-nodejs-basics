// Функция, которая считывает строку из process.stdin, переворачивает текст с помощью Transform Stream 
// и затем записывает его вprocess.stdout

import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const reversStr = (str) =>
    str.toString().split("")
        .reverse()
        .join("")

const transform = async () => {
    const myTransform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, reversStr(chunk))
        }
    })
    await pipeline(stdin, myTransform, stdout)
};

await transform();