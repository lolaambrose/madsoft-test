// prettier-ignore
const questions = [
   { id: '1', text: 'Какое расширение имеют файлы HTML?', type: 'short' },
   {
      id: '2',
      text: 'Выберите правильные теги для создания заголовков в HTML',
      type: 'checkbox',
      options: ['<h1>', '<header>', '<h2>', '<title>'],
   },
   {
      id: '3',
      text: 'Какой язык используется для стилизации веб-страниц?',
      type: 'multiple',
      options: ['HTML', 'CSS', 'JavaScript'],
   },
   { id: '4', text: 'Что такое DOM?', type: 'long' },
   {
      id: '5',
      text: 'Выберите правильные методы для работы с массивами в JavaScript',
      type: 'checkbox',
      options: ['map', 'filter', 'reduce', 'find'],
   },
   {
      id: '6',
      text: 'Какой метод используется для отправки HTTP-запросов в JavaScript?',
      type: 'multiple',
      options: ['fetch', 'get', 'post'],
   },
   { id: '7', text: 'Что такое Flexbox?', type: 'short' },
   {
      id: '8',
      text: 'Выберите правильные свойства для выравнивания элементов в Flexbox',
      type: 'checkbox',
      options: ['justify-content', 'align-items', 'flex-direction', 'grid-template'],
   },
   {
      id: '9',
      text: 'Какой метод используется для добавления элементов в конец массива в JavaScript?',
      type: 'multiple',
      options: ['push', 'pop', 'shift'],
   },
   { id: '10', text: 'Что такое CSS Grid?', type: 'long' },
   {
      id: '11',
      text: 'Выберите правильные единицы измерения в CSS',
      type: 'checkbox',
      options: ['px', 'em', 'rem', 'pt'],
   },
   {
      id: '12',
      text: 'Какой атрибут используется для указания пути к файлу в теге <img>?',
      type: 'multiple',
      options: ['src', 'href', 'alt'],
   },
   { id: '13', text: 'Что такое API?', type: 'long' },
   {
      id: '14',
      text: 'Выберите правильные методы для работы с объектами в JavaScript',
      type: 'checkbox',
      options: ['keys', 'values', 'entries', 'map'],
   },
   {
      id: '15',
      text: 'Какой метод используется для преобразования JSON-строки в объект в JavaScript?',
      type: 'multiple',
      options: ['JSON.parse', 'JSON.stringify', 'JSON.convert'],
   },
];

export default questions;
