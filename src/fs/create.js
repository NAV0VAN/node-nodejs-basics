import * as fs from 'node:fs/promises';
import { DIR_PATH, ERROR_MSG, SUCCESS_MSG } from './constants.js'
import * as path from 'path'

const FILE_NAME = 'fresh.txt'
const FOLDER_NAME = 'files'
const FILE_CONTENT = '"I am fresh and young"'

const FULL_PATH = path.join(DIR_PATH, FOLDER_NAME, FILE_NAME)


const create = async () => {
    try {
        await fs.writeFile(FULL_PATH, FILE_CONTENT, { flag: 'wx' })
            .then(() => {
                console.info(SUCCESS_MSG)
            })
    } catch (error) {
        throw new Error(ERROR_MSG);
    }
}

await create();
