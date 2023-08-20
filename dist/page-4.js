"use strict";
let contentMainC;
let imageMainC;
let titleMainC;
let UsernameC;
let commentC;
let outputCommentC;
const API_KEY_MYC = "3a9bb8c60d1f46ffa570a16c27016da9";
function getContentC() {
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${API_KEY_MYC}`)
        .then(response => response.json()).then(data => {
        imageMainC = data.articles[3].urlToImage;
        titleMainC = data.articles[3].title;
        console.log(data);
        showNoticeC(data);
    });
}
function showNoticeC(output) {
    output = `<h1>${titleMainC}</h1>
              <img src = '${imageMainC}' alt = 'main-notice-image'/>
              <p>This is the best MacBook for most people (7/10, WIRED Recommends). It has a bright and sharp LCD screen, slim borders for a sleek look, and enough power for everyday tasks. The webcam is 1080p, so you’ll look sharp in all your video calls, and there’s a MagSafe magnetic charging port, so if your roommate trips over the cable, the laptop won’t go flying (the cable will just detach). Read our Best MacBooks guide for more.</p>`;
    document.getElementById('notice-body').innerHTML = output;
}
function showCommentC() {
    UsernameC = document.getElementById("nameid");
    commentC = document.getElementById("commentsid");
    outputComment = `<p>'${UsernameC}'</p>
                  <p>'${commentC}'</p>`;
    document.getElementById('comments-section').innerHTML = outputComment;
}
getContentC();
