// Card Creating

fetch('dystopia.json')
  .then(response => response.json()) 
  .then(data => {
    const container = document.getElementById('cardContainer');
    console.log("container", container);
    data.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('card');
      bookCard.innerHTML = `
        <div  class="frame">
          <div class="cover">
          <img src="${book.image}" alt="${book.title}">
          <p class="desc">${book.description}</p>
          </div>
          </div>
        <div class="data">    
          <h1 class="title">${book.title}</h1>
          <h2 class="author">${book.author}</h2>
          <div class="prices">
          <h1 class="price">${book.price}</h1>
          <div class="prev">
            <h3 class="oldPrice">${book.originalPrice}</h3>
            <h2 class="discount">(${book.discount} off)</h2>
          </div>
          </div>
          <div class="icons">
            <a class="icon" href="#${book.title}">
              <img  src="../Gallery/fav.svg" alt="Favourite">
              <p>Add to wish list</p>
            </a>
            <a class="icon" href="#${book.title}">
              <img class="more" src="../Gallery/more.svg" alt="More">
              <p>Read more</p>
            </a>
            <a class="icon" href="#${book.title}">
              <img  src="../Gallery/buy.svg" alt="Buy Now">
              <p>Buy Now</p>
            </a>
          </div>
        </div>
      `;
      container.appendChild(bookCard);
    });
    const cards = document.querySelectorAll('.card');
    console.log("cards", cards);
    cards.forEach(card => {
      const icon = card.querySelector('.icons')
      const desc = card.querySelector('.desc')
      card.addEventListener('mouseover', () => {
        icon.style.opacity = '1';
        desc.style.opacity = '1';
        desc.style.transform = 'translateY(0)';
      });
      card.addEventListener('mouseout', () => {
          icon.style.opacity = '0';
          desc.style.opacity = '0';
          desc.style.transform = 'translateY(100%)';
      });
    })


  })
  .catch(error => {
    console.error("Error fetching the books data:", error);
  });
