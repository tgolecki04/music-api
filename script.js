  const btn = document.getElementById("scrollTopBtn");

  // pokaż przycisk po scrollu
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // scroll do góry po kliknięciu
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

const primary_btn = document.getElementById("primary-btn");
const target = document.getElementById("my-music");
const navHeight = document.querySelector("nav").offsetHeight;

 primary_btn.addEventListener("click", () => {
    window.scrollTo({
        top: target.offsetTop - navHeight,
        behavior: "smooth"
    });
  });

  /* PRZYCISK LOGOWANIA*/
const client_id = '264d0559f2ba45f2';
const redirect_uri = 'https://tgolecki04.github.io/music-api//'; // Twój GitHub Pages
const scopes = 'user-top-read user-read-recently-played';

document.querySelector('.login-btn').addEventListener('click', () => {
    const authURL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent(scopes)}`;
    window.location = authURL; // przekierowanie do logowania Spotify
});

/* TOKEN */
const hash = window.location.hash.substring(1); // usuwa #
const params = new URLSearchParams(hash);
const token1 = params.get('access_token');

if(token){
    console.log('Token:', token);
    // teraz możesz wywołać Spotify API
}

if(token){
    fetch('https://api.spotify.com/v1/me/top/artists?limit=10', {
        headers: { Authorization: 'Bearer ' + token }
    })
    .then(res => res.json())
    .then(data => {
        const ul = document.createElement('ul');
        data.items.forEach(artist => {
            const li = document.createElement('li');
            li.textContent = artist.name;
            ul.appendChild(li);
        });
        document.body.appendChild(ul);
    });
}

const token = '1POdFZRZbvb...qqillRxMr2z';
const artistId = '7CJgLPEqiIRuneZSolpawQ';
const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=PL`;

fetch(url, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
.then(res => res.json())
.then(data => {
  console.log(data.tracks); // tablica top utworów
})
.catch(err => console.error(err));
