
fetch('contact.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('offices-container');

    data.offices.forEach(office => {
      const div = document.createElement('div');
      div.className = 'item-five';
      div.innerHTML = `
        <div class="txt-five">
          <p>${office.type}</p>
          <p>${office.address}</p>
          <p>${office.description}</p>
        </div>
        <div class="logo-five"> 
          <div class="logo-five-item">
            <img src="emailSolid.png" alt="">
            <p>${office.email}</p>
          </div>
          <div class="logo-five-item">
            <img src="phoneSolid.png" alt="">
            <p>${office.phone}</p>
          </div>
          <div class="logo-five-item">
            <img src="locationSSolid.png" alt="">
            <p>${office.location}</p>
          </div>
        </div>
        <div class="btn-five"> 
          <button>Get Direction</button>
        </div>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Error loading JSON:', err));
