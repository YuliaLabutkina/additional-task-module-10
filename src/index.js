import './styles.css';
import articles from './js/articles-obj';
import newsArticle from './template/news.hbs';


// Фукционал
//  - Пользователь может ввести свое имя и фамилию в форму и отправить ее
//  - После отправки, под формой вы должны отрендерить надпись {name} {secondName}, 
// выбирите категорию новостей а также селектор где пользователь может выбрать 1 из 3 категорий новостей
//  - После выбора категории новости вы должны отрендерить те новости которые выбрал пользователь 
//  - Пользователь может выбрать другую категорию, вы должны отрендерить новости из новой категории
// - При перезагрузке страницы имя пользовател и выбранная категория должна сохранятся 


const formRef = document.querySelector('.user-form');
const userNameRef = document.querySelector('input.name');
const userSurnameRef = document.querySelector('input.surname');
const newsListRef = document.querySelector('select.oll-news');
const newsRef = document.querySelector('div.news');
const userNameSurnameRef = document.querySelector('div.user-name');

const createUserName = (userName) => {
  userNameSurnameRef.innerHTML = `<div>${userName}</div>`;
}

const clearValue = () => {
  userNameRef.value = '';
  userSurnameRef.value = '';
}


const submitForm = (event) => {
  event.preventDefault();
  localStorage.setItem('userName', `${userNameRef.value} ${userSurnameRef.value}`);
  const userName = localStorage.getItem('userName');
  createUserName(userName);
  clearValue();
}

const newsCategory = (obj) => {
  return obj.reduce((acc, current) => {
    // !acc.includes(current.category) && acc.push(current.category)

    if(!acc.includes(current.category)) {
      acc.push(current.category)
    }

    return acc;
  }, [])
}


const createNewsCategoryList = () => {
  const articlesNews = newsCategory(articles);
  newsListRef.innerHTML = articlesNews.reduce((acc, current) => acc + `<option value = "${(current)}">${current}</option>`, '<option value = ""></option>');
}
createNewsCategoryList();


const createNews = (el) => {

  const news = el.reduce((acc, current) => acc + newsArticle(current), '');
  newsRef.innerHTML = news;
}

const arrayNews = () => articles.filter(el => newsListRef.value === el.category);

const renderNews = (event) => {

  localStorage.setItem('category', `${event.target.value}`);
  createNews(arrayNews());
}


newsListRef.addEventListener('change', renderNews);
formRef.addEventListener('submit', submitForm);


const savedSettings = () => {
  if(localStorage.getItem('userName')) {
    createUserName(localStorage.getItem('userName'));
  }

  if(localStorage.getItem('category')) {
    newsListRef.value = localStorage.getItem('category');
    createNews(arrayNews());
  }

}

savedSettings();