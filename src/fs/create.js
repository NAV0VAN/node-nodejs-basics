import * as fs from 'node:fs/promises';
import { existsSync } from 'node:fs';

const create = async () => {
    try {
        if (existsSync("./src/fs/files/fresh.txt")) {
            throw "FS operation failed"
        } else {
            fs.writeFile("./src/fs/files/fresh.txt", "I am fresh and young").then((err) => {
                if (err) {
                    console.log("ERROR in  fs.writeFile", err);
                } else {
                    console.log("Succsess, file create");
                }
            })
        }
    } catch (error) {
        console.log("ERROR in create() ", error)
    }
}

await create();
