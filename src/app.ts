
const MY_API_KEY = "3a9bb8c60d1f46ffa570a16c27016da9";

let image: any = null;
let title: any = null;
let description: any = null;
let url : any = null;

let imageA: any;
let titleA: any;
let urlA: any;

let imageB: any;
let titleB: any;
let urlB: any;

let imageC: any;
let titleC: any;
let urlC: any;

let imageD: any;
let titleD: any;
let urlD: any;
   
function getNews() {
  fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${MY_API_KEY}`)
  .then(response => response.json()).then(
    data => {
       
        description = data.articles[0].description;
        image = data.articles[0].urlToImage;
        title = data.articles[0].title;
        url = data.articles[0].url;

        console.log(data);
        console.log(image, title, description);

        showMainNotice(data);
    }
  );
}

function showMainNotice(output: any){
  output = `<a href = '/html/page-1.html'><img src = '${image}' alt = 'main-notice-image'/>
            <h1>${title}</h1>
            <p>${description}</p></a>`;

  document.querySelector("main")!.innerHTML = output;
}

function showArticles1(){
  fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${MY_API_KEY}`)
  .then(response => response.json()).then(
    data => {
         imageA = data.articles[1].urlToImage;
         titleA = data.articles[1].title;
         urlA = data.articles[1].url;

         showArticle1(data);
}
  );
}

function showArticle1(output: any){
  output = `<a href ='/html/page-2.html'><img src = '${imageA}' alt = 'article-image'/>
             <h3>${titleA}</h3></a>`;

  document.getElementById("post-1")!.innerHTML = output;
}

function showArticles2(){
  fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${MY_API_KEY}`)
  .then(response => response.json()).then(
    data => {
         imageA = data.articles[2].urlToImage;
         titleA = data.articles[2].title;
         urlA = data.articles[2].url;

         showArticle2(data);
}
  );
}

function showArticle2(output: any){
  output = `<a href ='/html/page-3.html'><img src = '${imageA}' alt = 'article-image'/>
  <h3>${titleA}</h3></a>`;

  document.getElementById("post-2")!.innerHTML = output;
}

function showArticles3(){
  fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${MY_API_KEY}`)
  .then(response => response.json()).then(
    data => {
         imageA = data.articles[3].urlToImage;
         titleA = data.articles[3].title;
         urlA = data.articles[3].url;

         showArticle3(data);
}
  );
}

function showArticle3(output: any){
  output = `<a href = '/html/page-4.html'><img src = '${imageA}' alt = 'article-image'/>
  <h3>${titleA}</h3></a>`;

  document.getElementById("post-3")!.innerHTML = output;
}

function showArticles4(){
  fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${MY_API_KEY}`)
  .then(response => response.json()).then(
    data => {
         imageA = data.articles[4].urlToImage;
         titleA = data.articles[4].title;
         urlA = data.articles[4].url;

         showArticle4(data);
}
  );
}

function showArticle4(output: any){
  output = `<a href ='/html/page-5.html'><img src = '${imageA}' alt = 'article-image'/>
  <h3>${titleA}</h3></a>`;

  document.getElementById("post-4")!.innerHTML = output;
}

function showArticles5(){
  fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${MY_API_KEY}`)
  .then(response => response.json()).then(
    data => {
         imageA = data.articles[5].urlToImage;
         titleA = data.articles[5].title;
         urlA = data.articles[5].url;

         showArticle5(data);
}
  );
}

function showArticle5(output: any){
  output = `<a href ='/html/page-6.html'><img src = '${imageA}' alt = 'article-image'/>
  <h3>${titleA}</h3></a>`;

  document.getElementById("post-5")!.innerHTML = output;
}

function showArticles6(){
  fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${MY_API_KEY}`)
  .then(response => response.json()).then(
    data => {
         imageA = data.articles[6].urlToImage;
         titleA = data.articles[6].title;
         urlA = data.articles[6].url;

         showArticle6(data);
}
  );
}

function showArticle6(output: any){
  output = `<a href ='/html/page-7.html'><img src = '${imageA}' alt = 'article-image'/>
  <h3>${titleA}</h3></a>`;

  document.getElementById("post-6")!.innerHTML = output;
}

getNews();
showArticles1();
showArticles2();
showArticles3();
showArticles4();
showArticles5();
showArticles6();





