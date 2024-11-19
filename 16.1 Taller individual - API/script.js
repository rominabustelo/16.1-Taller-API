const marvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=5dd6563277c8cb79c17a6338066342cf&hash=4e457e4ce8d5cda7031bdc9b1c65b561';
      const container = document.querySelector('#marvel');
      let contentHTML = `
        <div class="row row-cols-1 row-cols-md-4 g-2">`; 
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const serie of json.data.results) {
            let urlSerie = serie.urls[0].url;
            contentHTML += `
              <div class="col">
                <div class="card">
                  <a href="${urlSerie}" target="_blank" class="card-img-container">
                    <img src="${serie.thumbnail.path}.${serie.thumbnail.extension}" alt="${serie.title}" class="img-card">
                  </a>
                  <div class="card-body">
                    <h3 class="title">${serie.title}</h3>
                  </div>
                </div>
              </div>`;
          }
          
          contentHTML += `</div>`; 
          container.innerHTML = contentHTML;
        })
        .catch(error => console.error('Error al obtener datos de Marvel:', error));
    }
  };
  marvel.render();
  



