import { existsSync, unlink } from "node:fs"

const delFilePath = './src/fs/files/fileToRemove.txt'

const remove = async (delFilePath) => {
    try {
        if (existsSync(delFilePath)) {
            unlink(delFilePath, (err) => {
                if (err) throw "Delete operation failed";
            })
        } else {
            throw "FS operation failed (file is missing)"
        }
    } catch (error) {
        console.error("ERROR: ", error)
    }
};

await remove(delFilePath);