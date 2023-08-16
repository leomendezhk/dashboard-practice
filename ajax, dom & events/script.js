//API appliacation program interface
//piece of code that allow to comunicate with other servers to get some data

//SYNC AND ASYNC
//SYNC executes in sequential order
//ASYNCH executes all parallel in will deliver when proccess finish

//HTTP
//is the way internet platform ask for information
//http methods: GET, POST, DELETE, PUT.

//AJAX
// allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. WITHOUT RELOAD.
//It request api to a server, wait to receive data , can fail or not. Data is recived as JSON, object in string that can be converted to object to be worked on.

//FETCH
//It is a modern way to request data from a server and to prosses it.

const randomData = () => {
  const getDATA = fetch("https://randomdata.com/api")
    .then((respose) => respose.json())
    .then((data) => console.log(data));
};

//DOM
//DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic.

//select elements use
//document.querySelector('#,.,p')
//document.querySelectorAll('#,.,p')

//getElementbyClass('')
//getElementbyId('')

//DOM MANIPULATION
//document.querySelector('p').innerHTML = "<strong>text</strong>";
//document.querySelector('p').textContent = 'new text';

//innerHTML allows to add tag
//textContent only modify text

//GET OR SET
// document.querySelector('a').getAttribute('href')
// document.querySelector('a').setAttribute('href') = 'http://www.newlink.com'

//EDIT CSS STYLE FROM DOM
// document.querySelector('a').style.backgroundColor = 'blue';

//DOM ADD EVENT
// document.querySelector("p").addEventListener("click", function () {
//   console.log("click on p");
// });
