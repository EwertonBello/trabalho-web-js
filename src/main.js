const xhttp = new XMLHttpRequest();
xhttp.responseType = "json";
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
		let text = "";
		xhttp.response.map(character => {
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

    	document.getElementById('section').innerHTML = text;
	}
};
xhttp.open("GET", "https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json", true);
xhttp.send();


// fetch('https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json')
// .then(res => res.json())
// .then(response => {
//     let text = "";
//     response.map(character => {
//       text+=`
//           <div class="box">
//             <article class="media">
//               <div class="media-left">
//                   <img class="image-perfil" src="${character.image}" alt="Image Character">
//               </div>
//               <div class="media-content">
//                 <div class="content">
//                   <p>
//                     <strong>${character.name}</strong>
//                     <br/>
//                     Specie: ${character.species}<br/>
//                     Gender: ${character.gender}<br/>
//                     Height: ${character.height}<br/>
//                     Origin: ${character.homeworld}<br/>
//                     Link: <a href="${character.wiki}">${character.wiki}</a>
//                   </p>
//                 </div>
//               </div>
//             </article>
//           </div>
//       `;
//     });

//     document.getElementById('section').innerHTML = text;
// })
// .catch(err => {
// console.log(err);
// });


// fetch('https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json')
// .then(res => {
// 	if (res.status == 200) {
// 		res.json().then(response => {
// 	    let text = "";
// 	    response.map(character => {
// 	      text+=`
// 	          <div class="box">
// 	            <article class="media">
// 	              <div class="media-left">
// 	                  <img class="image-perfil" src="${character.image}" alt="Image Character">
// 	              </div>
// 	              <div class="media-content">
// 	                <div class="content">
// 	                  <p>
// 	                    <strong>${character.name}</strong>
// 	                    <br/>
// 	                    Specie: ${character.species}<br/>
// 	                    Gender: ${character.gender}<br/>
// 	                    Height: ${character.height}<br/>
// 	                    Origin: ${character.homeworld}<br/>
// 	                    Link: <a href="${character.wiki}">${character.wiki}</a>
// 	                  </p>
// 	                </div>
// 	              </div>
// 	            </article>
// 	          </div>
// 	      `;
// 	    });

// 	    document.getElementById('section').innerHTML = text;

// 		})
// 	}
// })
// .catch(err => {
// console.log(err);
// });
