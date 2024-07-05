// background.js

// API endpoint for joke fetching
const jokeApiUrl = "https://official-joke-api.appspot.com/random_joke";

// Function to fetch a random joke
async function getJoke() {
  try {
    const response = await fetch(jokeApiUrl);
    const jokeData = await response.json();
    return jokeData.setup + " " + jokeData.punchline;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return "Error fetching joke!";
  }
}

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === "getJoke") {
    const joke = await getJoke();
    sendResponse({ joke });
    return true; // Required to keep the message channel open for async sendResponse
  }
});
