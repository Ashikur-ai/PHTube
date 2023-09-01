

const loadCategory = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
  const data = await response.json();
  const categories = data.data;
  console.log(categories);

  // 1. grab the container 
  const categoryContainer = document.getElementById('category-container');

  categories.forEach(category => {
    // 2. create new element 
    const div = document.createElement('div');
    // 3. setting the element 
    
    div.innerHTML = `
      <button onclick = "changeColor()" class="btn">${category.category}</button>
    `;
    console.log(category.category);

    // 4. appending the element 
    categoryContainer.appendChild(div);

  });
}

loadCategory();






