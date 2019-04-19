let NumberOfWords = 13

let words = new BuildArray(NumberOfWords)

words[1] = "О привет"
words[2] = "Сам такой"
words[3] = "А я знаю тебя"
words[4] = "Как ты?"
words[5] = "Блин"
words[6] = "Капец"
words[7] = "ЧТО?"
words[8] = "Харе"
words[9] = "Не понял!"
words[10] = "Нет слов)"
words[11] = "fuchsia"
words[12] = "Нет сил"
words[13] = "Спать("

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
let rnd = Math.ceil(Math.random() * NumberOfWords)
frm.WordBox.value = words[rnd]
}