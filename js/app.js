const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const button = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Bhai Kisu akta den');
    }
    else {
        const newRow = document.createElement('tr');

        const addData = (title) => {
            const tableHead = document.createElement('th');
            tableHead.innerHTML = title.value;
            newRow.appendChild(tableHead);
            title.value = '';
        }

        addData(title);
        addData(author);
        addData(year);

        bookList.appendChild(newRow);
    }
});