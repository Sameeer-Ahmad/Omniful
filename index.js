// Function to simulate an API call
function simulateApiCall(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = ["apple", "apricot", "application", "grape", "orange"];
      const filteredResults = results.filter((result) =>
        result.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filteredResults);
    }, 1000);
  });
}

// Function to debounce the search input
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Function to handle search input and update results
async function handleSearchInput(event) {
  const query = event.target.value;

  const results = await simulateApiCall(query);
  displayResults(results);
}


// Function to display search results
function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = results
    .map((result) => `<div class="result-item">${result}</div>`).join("")
    
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", debounce(handleSearchInput, 500));


/*
 * Difference between async and defer:
 * - `async` loads the script asynchronously with the HTML, meaning it can run before or after the HTML is completely parsed.
 * - `defer` loads the script asynchronously but ensures it runs after the HTML is completely parsed.
 */