// вибираємо форму та кнопку "Відправити"
const form = document.getElementById("myForm");
const submitBtn = form.querySelector("button");
let formData;

// відправка інформації на сервер, отримання і відображення результату
const sendData = async () =>  {
  try {
	  const result = await axios.post('/add', formData);
	  let res = result.data; // Дані, які повернув сервер	
      console.log('result: ', res)	
	} catch (error) {
	  console.error(error); // Обробка помилок
	}
  };

// коли форма була відправлена, запобігаємо перезавантаженню сторінки
form.addEventListener("submit", (event) => {
  event.preventDefault();
  formData = new FormData(event.target);
  sendData();
});


