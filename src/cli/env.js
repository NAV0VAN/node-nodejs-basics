// реализовать функцию, которая анализирует переменные окружения с префиксом RSS_ 
// и выводит их на консоль в формате RSS_name1=value1; RSS_name2=value2

const parseEnv = () => {
    try {
        const envVariables = process.env
        for (let nameVar in envVariables) {
            if (nameVar.startsWith("RSS_")) {
                console.log(nameVar, " = ", envVariables[nameVar])
            }
        }
    } catch (error) {
        console.log("ERROR: ", error)
    }
};

parseEnv();
