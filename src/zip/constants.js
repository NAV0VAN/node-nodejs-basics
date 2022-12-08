import {fileURLToPath} from 'node:url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export const FILE_PATH = path.join(__dirname, 'files', 'fileToCompress.txt')
export const ARCHIVE_PATH = path.join(__dirname, 'files', 'archive.gz')