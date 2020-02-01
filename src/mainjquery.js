$.getJSON('https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json', response => {
    let text = "";
    response.map(character => {
      text+=`
          <div class="box">
            <article class="media">
              <div class="media-left">
                  <img class="image-perfil" src="${character.image}" alt="Image Character">
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>${character.name}</strong>
                    <br/>
                    Specie: ${character.species}<br/>
                    Gender: ${character.gender}<br/>
                    Height: ${character.height}<br/>
                    Origin: ${character.homeworld}<br/>
                    Link: <a href="${character.wiki}">${character.wiki}</a>
                  </p>
                </div>
              </div>
            </article>
          </div>
      `;
    });

    $('#section').html(text);
});
