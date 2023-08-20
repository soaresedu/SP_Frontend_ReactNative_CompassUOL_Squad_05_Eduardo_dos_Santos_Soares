"use strict";
let contentMainF;
let imageMainF;
let titleMainF;
let UsernameF;
let commentF;
let outputCommentF;
const API_KEY_MYF = "3a9bb8c60d1f46ffa570a16c27016da9";
function getContentF() {
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${API_KEY_MYF}`)
        .then(response => response.json()).then(data => {
        imageMainF = data.articles[6].urlToImage;
        titleMainF = data.articles[6].title;
        console.log(data);
        showNoticeF(data);
    });
}
function showNoticeF(output) {
    output = `<h1>${titleMainF}</h1>
              <img src = '${imageMainF}' alt = 'main-notice-image'/>
              <p>If you're like me, using a Samsung Galaxy, Google Pixel, or Apple iPhone has become increasingly difficult due to these phones' penchant for using flickering displays. The OLED panels that power these devices sure look nice, but unfortunately for us, our eyes and brains just don't like how they operate.</p>`;
    document.getElementById('notice-body').innerHTML = output;
}
function showCommentF() {
    UsernameF = document.getElementById("nameid");
    commentF = document.getElementById("commentsid");
    outputComment = `<p>'${UsernameF}'</p>
                  <p>'${commentF}'</p>`;
    document.getElementById('comments-section').innerHTML = outputComment;
}
getContentF();
