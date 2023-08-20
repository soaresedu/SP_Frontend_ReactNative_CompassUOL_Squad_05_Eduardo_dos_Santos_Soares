let contentMainE: any;
let imageMainE: any;
let titleMainE: any;


let UsernameE: any;
let commentE: any;
let outputCommentE: any;

const API_KEY_MYE = "3a9bb8c60d1f46ffa570a16c27016da9";

function getContentE() {
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${API_KEY_MYE}`)
    .then(response => response.json()).then(
      data => {
         
          imageMainE = data.articles[5].urlToImage;
          titleMainE = data.articles[5].title;
        
          console.log(data);
          showNoticeE(data);
      }
    );
  }
  
  function showNoticeE(output: any){
    output = `<h1>${titleMainE}</h1>
              <img src = '${imageMainE}' alt = 'main-notice-image'/>
              <p>When it comes to taking photos, the camera on the Google Pixel 7 is very tough to beat — it can take photos that are almost as good as a "regular" camera. We really can use it as our one and only camera, and plenty of the product photos you see on websites like Android Central were taken with a Pixel phone.</p>`;
  
    document.getElementById('notice-body')!.innerHTML = output;
}


function showCommentE(){
    UsernameE = document.getElementById("nameid");
    commentE = document.getElementById("commentsid");

    outputComment = `<p>'${UsernameE}'</p>
                  <p>'${commentE}'</p>`

    document.getElementById('comments-section')!.innerHTML = outputComment;
}

getContentE();