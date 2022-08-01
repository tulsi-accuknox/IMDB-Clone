/////////////////////////////// TMDB API ///////////////////////////

const api_key = "api_key=8a5affec5956038d2833fa589dac1040";
const base_url = "https://api.themoviedb.org/3";
const img_url = "https://image.tmdb.org/t/p/w500";

// =================================apis==============================
const popular_api =
  base_url + "/discover/movie?sort_by=popularity.desc&" + api_key;
const high_api =
  base_url +
  "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&" +
  api_key;
const kids_api =
  base_url +
  "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&" +
  api_key;
const best_api =
  base_url +
  "/discover/movie?primary_release_year=2020&sort_by=vote_average.desc&" +
  api_key;
const fav_api =
  base_url +
  "/discover/movie?with_genres=18&primary_release_year=201&" +
  api_key;

const popularCards = document.querySelector(".popular-cards");
const highCards = document.querySelector(".highrated-cards");
const kidCards = document.querySelector(".kids-cards");
const fanCards = document.querySelector(".fan-cards");
const bestCards = document.querySelector(".best-cards");
const movieSearchBox = document.getElementById("movie-search-box");
const searchList = document.getElementById("search-list");
const bodySelect = document.querySelectorAll('body');

// ================================popular function==========================

function popularMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showPopularMovie(data.results);
    });
}

popularMovie(popular_api);

function showPopularMovie(data) {
  popularCards.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, vote_average, id } = movie;
    const p_movie = document.createElement("div");
    p_movie.classList.add("p-card");
    p_movie.innerHTML = `<div class="p-card-img">
                               <img src="${
                                 img_url + poster_path
                               }" alt="${title}" />
                            </div>
                            <div class="card-detail">
                            <div class="p-star">
                              <div class="p-p-star">
                                <i class="bx bxs-star"></i>
                                <p>${vote_average}</p>
                              </div>
                              <span class="star">
                                <i class="bx bx-star"></i>
                              </span>
                            </div>
  
                            <div class="p-movie">
                              <a href="#">${title}</a>
                            </div>
  
                            <div class="p-btn">
                              <a href="#">Watch options</a>
                            </div>
  
                            <div class="p-trailer" id= "${id}">
                              <div class="trailer-btn star">
                                <i class="bx bxs-right-arrow"></i>
                                <p>Trailer</p>
                              </div>
                              <div class="trailer-info star">
                                <i class="bx bx-info-circle"></i>
                              </div>
                            </div>`;
    popularCards.appendChild(p_movie);

    // document.getElementById(id).addEventListener('click', () => {
    //     console.log(id);
    //     openNav(movie);
    // })
  });
}

// ==================for highrated movies========================

function highratedMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showHighMovie(data.results);
    });
}

highratedMovie(high_api);

function showHighMovie(data) {
  highCards.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, vote_average, id } = movie;
    const p_movie = document.createElement("div");
    p_movie.classList.add("high-card");
    p_movie.innerHTML = `<div class="p-card-img">
                               <img src="${
                                 img_url + poster_path
                               }" alt="${title}" />
                            </div>
                            <div class="card-detail">
                            <div class="p-star">
                              <div class="p-p-star">
                                <i class="bx bxs-star"></i>
                                <p>${vote_average}</p>
                              </div>
                              <span class="star">
                                <i class="bx bx-star"></i>
                              </span>
                            </div>
  
                            <div class="p-movie">
                              <a href="#">${title}</a>
                            </div>
  
                            <div class="p-btn">
                              <a href="#">Watch options</a>
                            </div>
  
                            <div class="p-trailer" id= "${id}">
                              <div class="trailer-btn star">
                                <i class="bx bxs-right-arrow"></i>
                                <p>Trailer</p>
                              </div>
                              <div class="trailer-info star">
                                <i class="bx bx-info-circle"></i>
                              </div>
                            </div>`;
    highCards.appendChild(p_movie);
  });
}

// ===========================kids function=====================

function kidsMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showKidsMovie(data.results);
    });
}

kidsMovie(kids_api);

function showKidsMovie(data) {
  kidCards.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, vote_average, id } = movie;
    const p_movie = document.createElement("div");
    p_movie.classList.add("k-card");
    p_movie.innerHTML = `<div class="p-card-img">
                               <img src="${
                                 img_url + poster_path
                               }" alt="${title}" />
                            </div>
                            <div class="card-detail">
                            <div class="p-star">
                              <div class="p-p-star">
                                <i class="bx bxs-star"></i>
                                <p>${vote_average}</p>
                              </div>
                              <span class="star">
                                <i class="bx bx-star"></i>
                              </span>
                            </div>
  
                            <div class="p-movie">
                              <a href="#">${title}</a>
                            </div>
  
                            <div class="p-btn">
                              <a href="#">Watch options</a>
                            </div>
  
                            <div class="p-trailer" id= "${id}">
                              <div class="trailer-btn star">
                                <i class="bx bxs-right-arrow"></i>
                                <p>Trailer</p>
                              </div>
                              <div class="trailer-info star">
                                <i class="bx bx-info-circle"></i>
                              </div>
                            </div>`;
    kidCards.appendChild(p_movie);
  });
}

// =============================fan function===========================

function fanMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showFanMovie(data.results);
    });
}

fanMovie(fav_api);

function showFanMovie(data) {
  fanCards.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, vote_average, id } = movie;
    const p_movie = document.createElement("div");
    p_movie.classList.add("f-card");
    p_movie.innerHTML = `<div class="p-card-img">
                               <img src="${
                                 img_url + poster_path
                               }" alt="${title}" />
                            </div>
                            <div class="card-detail">
                            <div class="p-star">
                              <div class="p-p-star">
                                <i class="bx bxs-star"></i>
                                <p>${vote_average}</p>
                              </div>
                              <span class="star">
                                <i class="bx bx-star"></i>
                              </span>
                            </div>
  
                            <div class="p-movie">
                              <a href="#">${title}</a>
                            </div>
  
                            <div class="p-btn">
                              <a href="#">Watch options</a>
                            </div>
  
                            <div class="p-trailer" id= "${id}">
                              <div class="trailer-btn star">
                                <i class="bx bxs-right-arrow"></i>
                                <p>Trailer</p>
                              </div>
                              <div class="trailer-info star">
                                <i class="bx bx-info-circle"></i>
                              </div>
                            </div>`;
    fanCards.appendChild(p_movie);
  });
}

// =========================best movie function=======================

function bestMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showBestMovie(data.results);
    });
}

bestMovie(best_api);

function showBestMovie(data) {
  bestCards.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, vote_average, id } = movie;
    const p_movie = document.createElement("div");
    p_movie.classList.add("b-card");
    p_movie.innerHTML = `<div class="p-card-img">
                               <img src="${
                                 img_url + poster_path
                               }" alt="${title}" />
                            </div>
                            <div class="card-detail">
                            <div class="p-star">
                              <div class="p-p-star">
                                <i class="bx bxs-star"></i>
                                <p>${vote_average}</p>
                              </div>
                              <span class="star">
                                <i class="bx bx-star"></i>
                              </span>
                            </div>
  
                            <div class="p-movie">
                              <a href="#">${title}</a>
                            </div>
  
                            <div class="p-btn">
                              <a href="#">Watch options</a>
                            </div>
  
                            <div class="p-trailer" id= "${id}">
                              <div class="trailer-btn star">
                                <i class="bx bxs-right-arrow"></i>
                                <p>Trailer</p>
                              </div>
                              <div class="trailer-info star">
                                <i class="bx bx-info-circle"></i>
                              </div>
                            </div>`;
    bestCards.appendChild(p_movie);
  });
}

// ====================search functionality=====================

// function searchMovieFunction(url){

//     fetch(url).then(res => res.json()).then(data =>{
//         console.log(data.results);
//      })
// }

// searchMovieFunction(`${searchMovie}&query=marvel`);

function searchMovie(searchTerm) {
  const url = `${base_url}/search/movie?${api_key}&query=${searchTerm}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showSearchedmovies(data.results);
    });
}

function findMovies() {
  let searchResult = movieSearchBox.value.trim();
  console.log(searchResult);
  if (searchResult.length > 0) {
    searchList.classList.remove("hidden-search-list");
    searchMovie(searchResult);
  } else {
    searchList.classList.add("hidden-search-list");
  }

}

function showSearchedmovies(data) {
  searchList.innerHTML = "";
  data.forEach((movie) => {
    const {title, poster_path, release_date} = movie;
    const search_movie = document.createElement('div');
    search_movie.classList.add('search-list-item');
    
    search_movie.innerHTML = `
        <div class="search-list-item">
            <img src="${img_url +poster_path}" alt="image" />
        <div class="search-item-info">
          <h3>${title}</h3>
          <p>${release_date}</p>
        </div>
      </div>`;
    searchList.appendChild(search_movie);
  });
}
