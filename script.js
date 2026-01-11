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


// tablica lokalnych obrazków
const placeholders = ["images/random1.png", "images/random2.png", "images/random3.png"];

/* API */
const API_KEY = "42caaf7e397a776303915827361a9121";
const USERNAME = "Golden_2004";

/* TOP UTWORY */
fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=5&period=overall`)
  .then(res => res.json())
  .then(data => {
    const tracks = data.toptracks.track; // tablica utworów

    // pobieramy wszystkie itemy w sekcji Top Utwory
    const items = document.querySelectorAll("#my_top_tracks .item");

    tracks.forEach((track, i) => {
      if (!items[i]) return; // jeśli mamy mniej divów niż utworów, pomijamy

      // ustawiamy obrazek po lewej (Last.fm nie zawsze ma obrazek, użyjemy placeholdera jeśli brak)
      const imgDiv = items[i].querySelector(".left-square img");
      let imageUrl = track.image.find(img => img.size === "large")?.["#text"] || "";
      if (!imageUrl || imageUrl === "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png") {
        imageUrl = placeholders[Math.floor(Math.random() * placeholders.length)];
      }
      imgDiv.src = imageUrl;

      // ustawiamy tytuł utworu
      items[i].querySelector(".song-title").textContent = track.name;

      // ustawiamy nazwę artysty
      items[i].querySelector(".song-artist").textContent = track.artist.name;
    });
  })
  .catch(err => console.error("Błąd ładowania danych:", err));



  /* TOP PLAYLISTY*/
  fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=5&period=overall`)
  .then(res => res.json())
  .then(data => {
    const albums = data.topalbums.album; // tablica utworów

    // pobieramy wszystkie itemy w sekcji Top Utwory
    const items = document.querySelectorAll("#my_top_playlists .item");

    albums.forEach((album, i) => {
      if (!items[i]) return; // jeśli mamy mniej divów niż utworów, pomijamy

      // ustawiamy obrazek po lewej (Last.fm nie zawsze ma obrazek, użyjemy placeholdera jeśli brak)
      const imgDiv = items[i].querySelector(".left-square img");
      let imageUrl = album.image.find(img => img.size === "large")?.["#text"] || "";
      if (!imageUrl || imageUrl === "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png") {
        imageUrl = placeholders[Math.floor(Math.random() * placeholders.length)];
      }
      imgDiv.src = imageUrl;

      // ustawiamy tytuł utworu
      items[i].querySelector(".song-title").textContent = album.name;

      // ustawiamy nazwę artysty
      items[i].querySelector(".song-artist").textContent = album.artist.name;
    });
  })
  .catch(err => console.error("Błąd ładowania danych:", err));

  /* LAST TRACKS */
  fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json`)
  .then(res => res.json())
  .then(data => {
    const last_tracks = data.recenttracks.track; // tablica utworów

    // pobieramy wszystkie itemy w sekcji Top Utwory
    const items = document.querySelectorAll("#my_last_tracks .item");

    last_tracks.forEach((track, i) => {
      if (!items[i]) return; // jeśli mamy mniej divów niż utworów, pomijamy

      // ustawiamy obrazek po lewej (Last.fm nie zawsze ma obrazek, użyjemy placeholdera jeśli brak)
      const imgDiv = items[i].querySelector(".left-square img");
      let imageUrl = track.image.find(img => img.size === "large")?.["#text"] || "";
      if (!imageUrl || imageUrl === "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png") {
        imageUrl = placeholders[Math.floor(Math.random() * placeholders.length)];
      }
      imgDiv.src = imageUrl;

      // ustawiamy tytuł utworu
      items[i].querySelector(".song-title").textContent = track.name;

      // ustawiamy nazwę artysty
      items[i].querySelector(".song-artist").textContent = track.artist.name;
    });
  })
  .catch(err => console.error("Błąd ładowania danych:", err));


  /* TOP ARTISTS COUNTRY */
  fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=poland&api_key=42caaf7e397a776303915827361a9121&format=json`)
  .then(res => res.json())
  .then(data => {
    const top_artists = data.topartists.artist; // tablica utworów

    // pobieramy wszystkie itemy w sekcji Top Utwory
    const items = document.querySelectorAll("#top_today .item");

    top_artists.forEach((artist, i) => {
      if (!items[i]) return; // jeśli mamy mniej divów niż utworów, pomijamy

      // ustawiamy obrazek po lewej (Last.fm nie zawsze ma obrazek, użyjemy placeholdera jeśli brak)
      const imgDiv = items[i].querySelector(".left-square img");
      let imageUrl = artist.image.find(img => img.size === "large")?.["#text"] || "";
      if (!imageUrl || imageUrl === "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png") {
        imageUrl = placeholders[Math.floor(Math.random() * placeholders.length)];
      }
      imgDiv.src = imageUrl;

      // ustawiamy tytuł utworu
      items[i].querySelector(".song-title").textContent = artist.name;

    });
  })
  .catch(err => console.error("Błąd ładowania danych:", err));

  /* TOP TRACKS COUNTRY - POLAND */
  fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=poland&api_key=${API_KEY}&format=json`)
  .then(res => res.json())
  .then(data => {
    const top_tracks_country = data.tracks.track; // tablica utworów

    // pobieramy wszystkie itemy w sekcji Top Utwory
    const items = document.querySelectorAll("#popular_today .item");

    top_tracks_country.forEach((track, i) => {
      if (!items[i]) return; // jeśli mamy mniej divów niż utworów, pomijamy

      // ustawiamy obrazek po lewej (Last.fm nie zawsze ma obrazek, użyjemy placeholdera jeśli brak)
      const imgDiv = items[i].querySelector(".left-square img");
      let imageUrl = track.image.find(img => img.size === "large")?.["#text"] || "";
      if (!imageUrl || imageUrl === "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png") {
        imageUrl = placeholders[Math.floor(Math.random() * placeholders.length)];
      }
      imgDiv.src = imageUrl;

      // ustawiamy tytuł utworu
      items[i].querySelector(".song-title").textContent = track.name;

      // ustawiamy nazwę artysty
      items[i].querySelector(".song-artist").textContent = track.artist.name;
    });
  })
  .catch(err => console.error("Błąd ładowania danych:", err));

  /* TOP TRACKS COUNTRY - USA */
  fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=United%20States&api_key=${API_KEY}&format=json`)
  .then(res => res.json())
  .then(data => {
    const top_tracks_country1 = data.tracks.track; // tablica utworów

    // pobieramy wszystkie itemy w sekcji Top Utwory
    const items = document.querySelectorAll("#usa .item");

    top_tracks_country1.forEach((track, i) => {
      if (!items[i]) return; // jeśli mamy mniej divów niż utworów, pomijamy

      // ustawiamy obrazek po lewej (Last.fm nie zawsze ma obrazek, użyjemy placeholdera jeśli brak)
      const imgDiv = items[i].querySelector(".left-square img");
      let imageUrl = track.image.find(img => img.size === "large")?.["#text"] || "";
      if (!imageUrl || imageUrl === "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png") {
        imageUrl = placeholders[Math.floor(Math.random() * placeholders.length)];
      }
      imgDiv.src = imageUrl;

      // ustawiamy tytuł utworu
      items[i].querySelector(".song-title").textContent = track.name;

      // ustawiamy nazwę artysty
      items[i].querySelector(".song-artist").textContent = track.artist.name;
    });
  })
  .catch(err => console.error("Błąd ładowania danych:", err));

  /* TOP TRACKS COUNTRY - SPAIN */
  fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=${API_KEY}&format=json`)
  .then(res => res.json())
  .then(data => {
    const top_tracks_country2 = data.tracks.track; // tablica utworów

    // pobieramy wszystkie itemy w sekcji Top Utwory
    const items = document.querySelectorAll("#spain .item");

    top_tracks_country2.forEach((track, i) => {
      if (!items[i]) return; // jeśli mamy mniej divów niż utworów, pomijamy

      // ustawiamy obrazek po lewej (Last.fm nie zawsze ma obrazek, użyjemy placeholdera jeśli brak)
      const imgDiv = items[i].querySelector(".left-square img");
      let imageUrl = track.image.find(img => img.size === "large")?.["#text"] || "";
      if (!imageUrl || imageUrl === "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png") {
        imageUrl = placeholders[Math.floor(Math.random() * placeholders.length)];
      }
      imgDiv.src = imageUrl;

      // ustawiamy tytuł utworu
      items[i].querySelector(".song-title").textContent = track.name;

      // ustawiamy nazwę artysty
      items[i].querySelector(".song-artist").textContent = track.artist.name;
    });
  })
  .catch(err => console.error("Błąd ładowania danych:", err));

  /* TOP TRACKS COUNTRY - JAPAN */
  fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=japan&api_key=${API_KEY}&format=json`)
  .then(res => res.json())
  .then(data => {
    const top_tracks_country3 = data.tracks.track; // tablica utworów

    // pobieramy wszystkie itemy w sekcji Top Utwory
    const items = document.querySelectorAll("#japan .item");

    top_tracks_country3.forEach((track, i) => {
      if (!items[i]) return; // jeśli mamy mniej divów niż utworów, pomijamy

      // ustawiamy obrazek po lewej (Last.fm nie zawsze ma obrazek, użyjemy placeholdera jeśli brak)
      const imgDiv = items[i].querySelector(".left-square img");
      let imageUrl = track.image.find(img => img.size === "large")?.["#text"] || "";
      if (!imageUrl || imageUrl === "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png") {
        imageUrl = placeholders[Math.floor(Math.random() * placeholders.length)];
      }
      imgDiv.src = imageUrl;

      // ustawiamy tytuł utworu
      items[i].querySelector(".song-title").textContent = track.name;

      // ustawiamy nazwę artysty
      items[i].querySelector(".song-artist").textContent = track.artist.name;
    });
  })
  .catch(err => console.error("Błąd ładowania danych:", err));