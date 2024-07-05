// Function to fetch a random dad joke
async function fetchDadJoke() {
   try {
     const response = await fetch('https://icanhazdadjoke.com/slack', {
       headers: {
         'Accept': 'application/json'
       }
     });
     const jokeData = await response.json();
     return jokeData.attachments[0].text;
   } catch (err) {
     console.error('Error fetching dad joke:', err);
     return 'Error fetching joke!';
   }
 }
 
 // Listen for messages from the popup script
 chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
   if (request.action === 'getJoke') {
     const joke = await fetchDadJoke();
     sendResponse({ joke });
   }
 });
 