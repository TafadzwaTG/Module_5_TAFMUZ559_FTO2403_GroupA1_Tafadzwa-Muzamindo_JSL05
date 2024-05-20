// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  // Feel free to add even more songs
  { title: "Fantasy", artist: "Mariah Carey", genre: "R&B" },
  { title: "Running Up the Hill", artist: "Kate Bush", genre: "Pop" },
  { title: "Respect", artist: "Aretha Franklin", genre: "R&B" },
  { title: "Let's Stay Together", artist: "AI Green", genre: "R&B" },
  { title: "Truly Madly Deeply", artist: "Savage Garden", genre: "Pop" },
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  // Add preferences for Drax, Rocket, and Groot
  Drax: "R&B",
  Rocket: "Pop",
  Groot: "Rock",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(_guardians, _songs) {
  // Initialize an empty object to store playlists for each guardian
  const playlists = {};
  // Iterate through each guardian
  for (const guardian in _guardians) {
    // Get the preferred genre of the guardian
    const genre = _guardians[guardian];
    // Filter songs based on the guardian's preferred genre
    const playlist = _songs.filter((song) => song.genre === genre);
    // Assign the playlist to the guardian in the playlists object
    playlists[guardian] = playlist;
  }
  // Return the playlists object
  return playlists;
}
// Function to display playlists in the DOM
function displayPlaylists(playlists) {
  // Get the playlists container element
  const playlistsContainer = document.getElementById("playlists");
  // Iterate through each Guardian's playlist
  for (const guardian in playlists) {
    const playlist = playlists[guardian];
    // Create a div element for the playlist
    const playlistElement = document.createElement("div");
    playlistElement.classList.add("playlist");
    // Create a heading for the playlist
    const heading = document.createElement("h2");
    heading.textContent = guardian + "'s Playlist";
    // Create a ul element for the song list
    const songList = document.createElement("ul");
    // Iterate through each song in the playlist
    playlist.forEach((song) => {
      const songItem = document.createElement("li");
      songItem.innerHTML = `<span class="song-title">${song.title}</span> - <span>${song.artist}</span>`;
     
      songList.appendChild(songItem);
    });
    // Append heading and song list to playlist element
    playlistElement.appendChild(heading);
    playlistElement.appendChild(songList);
    // Append playlist element to playlists container
    playlistsContainer.appendChild(playlistElement);
  }
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);
displayPlaylists(playlists);
