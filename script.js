const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const submit = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submit.addEventListener("click",function(e){
	e.preventDefult();

	const titleVal = title.value.trim();
	const authorVal = author.value.trim();
	const isbnVal = isbn.value.trim();

	if(titleVal === '' || authorVal === '' || isbnVal === ''){
	  alert("Please fill all fields");
		return;
	}

const row = document.createElement('tr');

	row.innerHTML =`
	   <td>${titleVal}</td>
	   <td>${authorVal}</td>
	   <td>${isbnVal}</td>
	   <td><button id="delete">X</button></td>
	`;
	bookList.appendChild(row);

	title.value = '';
	author.value = '';
	isbn.value = '';
});

bookList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    const row = e.target.parentElement.parentElement;
    row.remove(); // removes the whole <tr>
  }
});
