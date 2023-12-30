// Given a list of words (strings), Modify the sortListO function so it returns the list sorted from smallest to largest word.

function sortList(list) {
    let len = list.length;
    
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            let current = list[j].toString().length, next = list[j + 1].toString().length;

            if (current > next) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;

            }
        }
    }
    return list;
}