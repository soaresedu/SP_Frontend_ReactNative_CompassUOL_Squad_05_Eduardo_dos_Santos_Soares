"use strict";
let contentMainB;
let imageMainB;
let titleMainB;
let UsernameB;
let commentB;
let outputCommentB;
const API_KEY_MYB = "3a9bb8c60d1f46ffa570a16c27016da9";
function getContentB() {
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${API_KEY_MYB}`)
        .then(response => response.json()).then(data => {
        imageMainB = data.articles[2].urlToImage;
        titleMainB = data.articles[2].title;
        console.log(data);
        showNoticeB(data);
    });
}
function showNoticeB(output) {
    output = `<h1>${titleMainB}</h1>
              <img src = '${imageMainB}' alt = 'main-notice-image'/>
              <p>According to a statement released by the law office involved in the suit against Apple, the tech giant will soon have to pay out up to $500 million to customers affected by its throttling of iPhones that had older batteries. The so-called Batterygate scandal affected people using iPhones in the 6, 6S, and 7 families, as well as the original SE model, and stems from complaints from users that Apple purposely slowed down the devices after they installed software updates. Apple hasn’t admitted any wrongdoing, instead positing that its practice of deliberately slowing down its phones wasn’t a technique to get people to buy a newer device but rather a safety measure to keep the phones from shutting down when the battery got too low. </p>`;
    document.getElementById('notice-body').innerHTML = output;
}
function showCommentB() {
    UsernameB = document.getElementById("nameid");
    commentB = document.getElementById("commentsid");
    outputComment = `<p>'${UsernameB}'</p>
                  <p>'${commentB}'</p>`;
    document.getElementById('comments-section').innerHTML = outputComment;
}
getContentB();
