

const loadCategory = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
  const data = await response.json();
  const categories = data.data;


  // 1. grab the container 
  const categoryContainer = document.getElementById('category-container');

  categories.forEach(category => {
    // 2. create new element 
    const div = document.createElement('div');
    // 3. setting the element 

    div.innerHTML = `
      <button onclick = "loadVideo(${category.category_id})" class="btn">${category.category}</button>
    `;


    // 4. appending the element 
    categoryContainer.appendChild(div);

  });
  loadAllVideo();
}


const loadVideo = async (id) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);

  const data = await response.json();
  const videos = data.data;

  // 1. grab the container for no Data
  const noDataContainer = document.getElementById('no-data-container');
  // clearing the data for each load
  noDataContainer.textContent = '';

  // 2.1 grab the container for data 
  const cardContainer = document.getElementById('card-container');
  // clearing the data for each load 
  cardContainer.textContent = '';
  const valu = "whats up";

  if (videos.length) {
    videos.forEach(video => {
      const duration = parseInt(video.others.posted_date);
      const hour = parseInt(duration / 3600);
      const minute = parseInt(duration / 60 - hour * 60);
      // 2.2 create new element 
      const div = document.createElement('div');
      // 2.3 adding inner html 
      div.innerHTML = `
        <div class="card ">
        <div class="">
        <img class='rounded-lg  h-52 w-96'  src="${video.thumbnail}"
            alt="Shoes" />
        </div>
        <div class="flex justify-end -mt-10 mr-2">
          <p class=" bg-black text-white px-4 rounded-lg ">${video.others.posted_date ? `${hour} hrs ${minute} min ago` : ``}</p>
        </div>
        <div class="mt-8 pt-5">
          <div class="flex  gap-2">
            <div class="avatar">
              <div class="w-12 rounded-full">
                <img src="${video.authors[0].profile_picture}" />
              </div>
            </div>
            <div class="">
              <h1 class="text-base font-bold">${video.title} </h1>
            </div>

          </div>
          <div class="pl-14 -mt-5 ">
            <div class="flex gap-1">
              <p>${video.authors[0].profile_name}</p>
              <span>${video.authors[0].verified ? "<img src='image/verified.png'>" : ""}</span>
              
            </div>
          
            <p>${video.others.views}</p>
          </div>
          
          <div class="card-actions">


          </div>
        </div>
      </div>
      `;
      // 2.4 append the element 
      cardContainer.appendChild(div);
    })
  }
  else {
    // 2. create element 
    const div = document.createElement('div');

    // 3. setting inner content 
    div.innerHTML = `
      <div class="flex justify-center items-center">
        <img src="image/Icon.png" alt="">
      </div>
      <div class="flex justify-center items-center">
        <p class="text-center text-4xl font-bold mt-8">Oops!! Sorry, There is no <br> content here</p>
      </div>
    `;

    // 4. append the child 
    noDataContainer.appendChild(div);
  }
}



const loadAllVideo = async () => {
  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);

  const data = await response.json();
  const videos = data.data;


  // 1 grab the container for data 
  const cardContainer = document.getElementById('card-container');
  // clearing the data for each load 
  cardContainer.textContent = '';

  

  videos.forEach(video => {
    const duration = parseInt(video.others.posted_date);
    const hour = parseInt(duration / 3600);
    const minute = parseInt(duration / 60 - hour * 60);
    
    // 2. create new element 
    const div = document.createElement('div');
    // 3. adding inner html 
    div.innerHTML = `
        <div class="card ">
        <div class="">
        <img class='rounded-lg h-52 w-96 '  src="${video.thumbnail}"
            alt="Shoes" />
        </div>
        <div class="flex justify-end -mt-10 mr-2">
          <p class=" bg-black text-white px-4 rounded-lg ">${video.others.posted_date ? `${hour} hrs ${minute} min ago` : ``} </p>
        </div>
        <div class="mt-8 pt-5">
          <div class="flex  gap-2">
            <div class="avatar">
              <div class="w-12 rounded-full">
                <img src="${video.authors[0].profile_picture}" />
              </div>
            </div>
            <div class="">
              <h1 class="text-base font-bold">${video.title} </h1>
            </div>

          </div>
          <div class="pl-14 -mt-5 ">
            <div class="flex gap-1">
              <p>${video.authors[0].profile_name}</p>
              <span>${video.authors[0].verified ? "<img src='image/verified.png'>" : ""}</span>
              
            </div>
          
            <p>${video.others.views}</p>
          </div>
          
          <div class="card-actions">


          </div>
        </div>
      </div>
      `;
    // 4. append the element 
    cardContainer.appendChild(div);
  })
}

loadCategory()







