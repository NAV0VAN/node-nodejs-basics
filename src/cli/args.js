/**
 * Функция, которая анализирует аргументы командной строки (данные в формате --propName value --prop2Name value2) 
 * и выводит их в консоль в формате: propName is value, prop2Name is value2
 */

const parseArgs = () => {
    try {
        const argsList = process.argv
        argsList.forEach((el, index) => {
            el.startsWith('--') ? console.log(`${el.slice(2)} is ${argsList[index + 1]}`) : null
        })
    } catch (error) {
        console.log("ERROR:", error)
    }


};

parseArgs();