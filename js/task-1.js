// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка 
// елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const items = document.querySelectorAll('ul#categories > li.item');

console.log('Кількість категорій:', items.length);

items.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('ul > li');
  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryItems.length}`);
});
