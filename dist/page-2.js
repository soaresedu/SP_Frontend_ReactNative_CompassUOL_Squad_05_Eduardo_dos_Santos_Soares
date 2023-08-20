"use strict";
let contentMainA;
let imageMainA;
let titleMainA;
let UsernameA;
let commentA;
let outputCommentA;
const API_KEY_MY = "3a9bb8c60d1f46ffa570a16c27016da9";
function getContentA() {
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${API_KEY_MY}`)
        .then(response => response.json()).then(data => {
        imageMainA = data.articles[1].urlToImage;
        titleMainA = data.articles[1].title;
        console.log(data);
        showNoticeA(data);
    });
}
function showNoticeA(output) {
    output = `<h1>${titleMainA}</h1>
              <img src = '${imageMainA}' alt = 'main-notice-image'/>
              <p>This week's best tech deals include the 9th-gen iPad on sale for $250, which ties the lowest price we've seen. While the 10.2-inch slate is showing its age design-wise, it's still a good bargain for those who just need a tablet for the basics and want the most affordable Apple tablet possible. Elsewhere, Sony is still running a rare $50 discount on PlayStation 5, while Amazon's Fire TV Stick 4K Max is within $2 of its best price to date. We're also seeing all-time lows on the top picks in our gaming headset and microSD card buying guides, plus Apple's third-gen AirPods. Here are the best tech deals from this week that you can still get today. </p>`;
    document.getElementById('notice-body').innerHTML = output;
}
function showCommentA() {
    UsernameA = document.getElementById("nameid");
    commentA = document.getElementById("commentsid");
    outputComment = `<p>'${Username}'</p>
                  <p>'${comment}'</p>`;
    document.getElementById('comments-section').innerHTML = outputComment;
}
getContentA();
