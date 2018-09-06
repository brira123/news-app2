$.ajax({
    url: `https://newsapi.org/v2/everything?sources=abc-news&apiKey=7f118cda5fb54966bc7747fea4b5a19b`,
    success: function(data) {
        console.log(data);
        for (i = 0; i <= 7; i++) {
            document.querySelector(".news-story").innerHTML +=
                `
             <div>
                <h1> ${data.articles[i].title} </h1>
              
                <p> ${data.articles[i].description}</p>
            </div class="head-line">
            <span class="news-image" style="background-image: url(${data.articles[i].urlToImage});"></span>
    
        </div>`
        }

    }
})




