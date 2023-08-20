"use strict";
let contentMain;
let imageMain;
let titleMain;
let Username;
let comment;
let outputComment;
const API_KEY = "3a9bb8c60d1f46ffa570a16c27016da9";
function getContent() {
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${API_KEY}`)
        .then(response => response.json()).then(data => {
        imageMain = data.articles[0].urlToImage;
        titleMain = data.articles[0].title;
        console.log(data);
        showNotice(data);
    });
}
function showNotice(output) {
    output = `<h1>${titleMain}</h1>
              <img src = '${imageMain}' alt = 'main-notice-image'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. <br> <br> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.</p>`;
    document.getElementById('notice-body').innerHTML = output;
}
function showComment() {
    Username = document.getElementById("nameid");
    comment = document.getElementById("commentsid");
    outputComment = `<p>'${Username}'</p>
                  <p>'${comment}'</p>`;
    document.getElementById('comments-section').innerHTML = outputComment;
}
getContent();
