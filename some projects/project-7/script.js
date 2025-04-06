const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const newQuote = document.querySelector("#new");
const tweetQuote = document.querySelector("#tweet");

const url = "https://api.realinspire.live/v1/quotes/random";

newQuote.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      quote.innerHTML = data[0].content;
      author.innerHTML = data[0].author;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
      quote.innerHTML = "Failed to load quote.";
      author.innerHTML = "";
    });
});
tweetQuote.addEventListener('click',tweet)
function tweet(){
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} --${author.innerHTML}`,"Tweet Window","width=600 , height=300")
}