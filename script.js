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




/* APi */
const API_KEY = "42caaf7e397a776303915827361a9121";
const USERNAME = "Golden_2004";

fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=8&period=overall`)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("artists");

    if (!data.topartists) {
      list.innerHTML = "<li>Brak danych z Last.fm</li>";
      return;
    }

    data.topartists.artist.forEach((artist, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${artist.name}`;
      list.appendChild(li);
    });
  })
  .catch(err => {
    document.getElementById("artists").innerHTML =
      "<li>Błąd ładowania danych</li>";
    console.error(err);
  });
