let contentMainD: any;
let imageMainD: any;
let titleMainD: any;


let UsernameD: any;
let commentD: any;
let outputCommentD: any;

const API_KEY_MYD = "3a9bb8c60d1f46ffa570a16c27016da9";

function getContentD() {
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=${API_KEY_MYD}`)
    .then(response => response.json()).then(
      data => {
         
          imageMainD = data.articles[4].urlToImage;
          titleMainD = data.articles[4].title;
        
          console.log(data);
          showNoticeD(data);
      }
    );
  }
  
  function showNoticeD(output: any){
    output = `<h1>${titleMainD}</h1>
              <img src = '${imageMainD}' alt = 'main-notice-image'/>
              <p>The Beats Studio Buds Plus are a much-needed revamp of the original Beats Studio Buds from 2021. They offer better sound, improved noise cancellation, and superior battery life, affording you up to six hours of listening per charge (or nine with ANC turned off). They’re a great option if you own both Apple and Android devices, too, thanks to a proprietary chip that lets you tap into native software features on both platforms. This allows for one-tap pairing regardless of your OS, along with the ability to use both Apple’s Find My and Google’s Find My Device. Now, if only Woot was offering the slick translucent option instead of just black.</p>`;
  
    document.getElementById('notice-body')!.innerHTML = output;
}


function showCommentD(){
    UsernameD = document.getElementById("nameid");
    commentD = document.getElementById("commentsid");

    outputComment = `<p>'${UsernameD}'</p>
                  <p>'${commentD}'</p>`

    document.getElementById('comments-section')!.innerHTML = outputComment;
}

getContentD();