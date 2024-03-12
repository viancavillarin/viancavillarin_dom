const cardsContainer = document.getElementById('cardsContainer');
const addCardButton = document.getElementById('addCard');
const titleInput = document.getElementById('titleInput');
const infoInput = document.getElementById('infoInput');

addCardButton.addEventListener('click', () => {
  const title = titleInput.value.trim();
  const info = infoInput.value.trim();
  
  if (title && info) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3', 'w-50');
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = title;
    
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = info;
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      card.remove();
    });
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(deleteButton);
    
    card.appendChild(cardBody);
    cardsContainer.appendChild(card);
    
    titleInput.value = '';
    infoInput.value = '';
  }
});
