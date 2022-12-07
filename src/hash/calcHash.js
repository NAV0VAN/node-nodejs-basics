// Функция, которая вычисляет хэш SHA256 для файла fileToCalculateHashFor.txt и записывает его в консоль как hex
import { createHash } from 'crypto'
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import * as path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const FILE_NAME = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')


const calculateHash = async () => {
      const inputData = await readFile(FILE_NAME)
      const fileHash = createHash('sha256').update(inputData).digest('hex')
      console.log("fileHash (hex)", fileHash)
};

await calculateHash();