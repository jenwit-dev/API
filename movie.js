const queryKeyword = "star";
const page = 1;
const BASE_URL = "https://api.themoviedb.org/3";
const endpoint = `${BASE_URL}/search/keyword?query=${queryKeyword}&page=${page}`;
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWEyMDE1ZTFmOTQwMjMzMWE3NDhkYjZmY2VmYmZlNiIsIm5iZiI6MTc0NzQ3Nzc2OS40Njg5OTk5LCJzdWIiOiI2ODI4NjUwOWRhNzBiNTE0ZDZmNTUyZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HUz9uc-_mOhHzj9Nugv_r36M02NkfEfqd4M3Ro_lf4U";
const option = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

// fetch(endpoint, option)
//   .then((result) => result.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

async function movieSearch() {
  try {
    const result = await fetch(endpoint, option);
    const data = await result.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

movieSearch();
