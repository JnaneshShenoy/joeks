// script.js

// Function to fetch a random dad joke
async function fetchDadJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/slack", {
      headers: {
        Accept: "application/json",
      },
    });
    const jokeData = await response.json();
    return jokeData.attachments[0].text;
  } catch (err) {
    console.error("Error fetching dad joke:", err);
    return "Error fetching joke!";
  }
}

// Event listener for the button to fetch a new joke
document.getElementById("getJokeButton").addEventListener("click", async () => {
  const jokeText = await fetchDadJoke();
  const jokeElement = document.getElementById("jokeElement");
  jokeElement.innerHTML = jokeText;
});

// Fetch and display a joke when the popup loads
document.addEventListener("DOMContentLoaded", async () => {
  const jokeText = await fetchDadJoke();
  const jokeElement = document.getElementById("jokeElement");
  jokeElement.innerHTML = jokeText;
});
