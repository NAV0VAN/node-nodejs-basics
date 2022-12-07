/**
 *  Копирование файлов из папки files в папку files_copy того же уровня вложенности
 */
import * as url from "url";
import * as path from "path";
import { mkdir, readdir, copyFile, constants } from "node:fs/promises";
import { ERROR_MSG } from "./constants.js";

const FILE_PATH = url.fileURLToPath(import.meta.url);
const DIR_PATH = path.dirname(FILE_PATH);
const PATH_FROM = path.join(DIR_PATH, "files");
const PATH_TO = path.join(DIR_PATH, "files_copy");

const copy = async () => {
      try {
            mkdir(PATH_TO, { recursive: false }).catch((err) => {
                  throw new Error(`${ERROR_MSG} (directory ${PATH_TO} exists)`);
            });
            const files = await readdir(PATH_FROM).catch((err) => {
                  throw new Error(`${ERROR_MSG}  (directory ${PATH_FROM} read error`);
            });
            const promises = files.map((fileName) => {
                  copyFile(
                        `${PATH_FROM}/${fileName}`,
                        `${PATH_TO}/${fileName}`,
                        constants.COPYFILE_EXCL
                  ).catch((err) => {
                        throw new Error(
                              `${ERROR_MSG}`
                        );
                  });
            });
            await Promise.all(promises);
      } catch (error) {
            console.error(error);
      }
};

await copy();
