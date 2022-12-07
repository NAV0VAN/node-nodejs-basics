import * as path from 'path'
import url from 'url'

export const FILE_PATH = url.fileURLToPath(import.meta.url)
export const DIR_PATH = path.dirname(FILE_PATH)
export const ERROR_MSG = 'FS operation failed'
export const SUCCESS_MSG = 'FS operation success'

