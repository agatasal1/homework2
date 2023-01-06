
/// 1. Napisz funkcje findByID, ktora przyjmie 2 parametry - tablice obiektow (kazdy obiekt musi zawierac pole id), oraz id po ktorym ma szukac. Funkcja powinna zwracac obiekt ktory dalo sie znalezc, w przeciwnym wypadku zwrocic null
const people = [
    {
        id: 1,
        name: 'Damian',
        age: 50
    },
    {
        id: 2,
        name: 'Pawel',
        age: 20
    },
    {
        id: 3,
        name: 'Pola',
        age: 16
    },
    {
        id: 4,
        name: 'Franek',
        age: 25
    }
];


const findByID = (array, id) => {
    array.forEach((element) => {
        if (element.id === id) {
            // console.log(element)
        }
    })
}


findByID(people, 3)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Poznaj metode dostepna na stringach i tablicach o nazwie includes.Dziala ona tak, ze jesli string lub tablica zawiera dany wyraz, to zwroci true

// 'Damian'.includes('da') -> false (includes patrzy na wielkie/male znaki)
// 'damian'.includes('da') -> true

// ['damian', 'agnieszka'].includes('damian') -> true

// jak obejsc male i duze znaki? jest metoda .toLowerCase() i .toUpperCase()

// 'Damian'.toLowerCase().includes('da') -> true


// Napisz metode filterByName, ktora przyjmie tablice obiektow people oraz tekst a nastepnie zwroci inna tablice obiektow, zawierajaca elementy, ktore udalo sie znalezc. Jesli nie uda znalezc sie nikogo, zwroc pusta tablice.

const people2 = [
    {
        id: 1,
        name: "Damian"
    },
    {
        id: 2,
        name: "Paweł"
    },
    {
        id: 3,
        name: "Agnieszka"
    }
]

// filterByName(people2, 'e') powinno zwrocic tablice obiektow zawierajaca pawla i agnieszke
// filterByName(people2, 'ag') powinno zwrocic tablice obiekow zawierajaca 1 obiekt - anigeszka
// filterByName(people2, 'das') powinno zwrocic pusta tablice

const filteredArray = []

const filterByName = (array, text) => {

    array.forEach((element) => {
        checkedElement = element.name.toLowerCase();
        chceckedText = text.toLowerCase();

        if (checkedElement.includes(chceckedText)) {
            filteredArray.push(element)
        }

    })
    console.log(filteredArray)
}


filterByName(people2, 'DAm')



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Stworz liste zamowien ksiazek. Po stronie HTML niech to bedzei tabela. Pod tabela umiesc formularz zawierajacy 3 pola input: title, year, author. Nastepnie za pomoca JS zrob obsluge dodawania nowego rekordu do tabeli. Skorzystaj z LS aby odczytac i zapisac dane do pamieci podrecznej

const titleInput = document.querySelector('input#title')
const yearInput = document.querySelector('input#year')
const authorInput = document.querySelector('input#author')
const addBookForm = document.querySelector('form')
const booksTable = document.querySelector('tbody')
const labelTitle = document.querySelector('label#title')
const labelYear = document.querySelector('label#year')
const labelAuthor = document.querySelector('label#author')

let books = []

let titleInfo = false;
let yearInfo = false;
let authorInfo = false;

const booksFromLS = JSON.parse(localStorage.getItem('books'));



if (booksFromLS) {
    books = booksFromLS
}




const addBook = (event) => {
    event.preventDefault();


    const newBook = {
        title: titleInput.value,
        year: yearInput.value,
        author: authorInput.value
    }

    if (titleInput.value && yearInput.value && authorInput.value) {
        books.push(newBook)
        titleInput.value = ''
        yearInput.value = ''
        authorInput.value = ''
    }
    else {
        if (!titleInput.value && !titleInfo) {
            labelTitle.innerHTML += ` <span>Fill in book title</span>`
            titleInfo = true;
        }
        if (!yearInput.value && !yearInfo) {
            labelYear.innerHTML += ` <span>Fill in year of publication</span>`;
            yearInfo = true;
        }

        if (!authorInput.value && !authorInfo) {
            labelAuthor.innerHTML += ` <span>Fill in author</span>`
            authorInfo = true;
        }

    }
    console.log(books)
    console.log(booksFromLS)
    localStorage.setItem('books', JSON.stringify(books))


    booksTable.innerHTML += `<tr id='book'><td>${newBook.title}</td> <td>${newBook.year}</td> <td>${newBook.author}</td></tr>`

}


addBookForm.addEventListener('submit', addBook)

books.forEach(book => {
    booksTable.innerHTML += `<tr id='book'><td>${book.title}</td> <td>${book.year}</td> <td>${book.author}</td></tr>`

})
