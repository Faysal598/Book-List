const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const button = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

button.addEventListener('click', (e) => {
    e.preventDefault();
    if(title.value == '' && author.value == '' && year.value == '')
    {
        alert('Bhai Kisu akta den');
    }
    else{
        const newRow = document.createElement('tr');
        
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        title.value = '';

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        author.value = '';

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        year.value = '';

        bookList.appendChild(newRow);
    }
});