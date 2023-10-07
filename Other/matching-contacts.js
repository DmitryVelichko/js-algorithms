// Написать функцию которая выведет контакты с совпадающем номером телефона
const book = [
    {name: 'aaa', phones: [111,222,333]},
    {name: 'bbb', phones: [444,555,222]},
    {name: 'ccc', phones: [333]},
    {name: 'ddd', phones: [777]}
]

// aaa, bbb: 222
// aaa, ccc: 333


function findContactsByPhone(book) {
    const phoneMap = {}; // Объект для хранения номеров телефонов и связанных с ними имен

    // Проходимся по книге контактов и заполняем phoneMap
    book.forEach(contact => {
