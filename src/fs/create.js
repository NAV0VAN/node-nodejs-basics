import * as fs from 'node:fs/promises';
import { DIR_PATH, ERROR_MSG, SUCCESS_MSG } from './constants.js'

const FILE_NAME = 'fresh.txt'
const FILE_CONTENT = '"I am fresh and young"'

const create = async () => {
    try {
        await fs.writeFile(`${DIR_PATH}/files/${FILE_NAME}`, FILE_CONTENT, { flag: 'wx' })
            .then(() => {
                console.info(SUCCESS_MSG)
            })
    } catch (error) {
        throw new Error(ERROR_MSG);
    }
}

await create();
