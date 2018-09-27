$.ajax({
    url: `https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=41fae6ba68b84d5fa1a29c9c32eed6d9`,
    success: function(data) {
        console.log(data);
        for (i = 0; i < 7; i++) {
            document.querySelector(".news-story").innerHTML +=
                `
             <div>
                <h1> ${data.articles[i].title} </h1>
              
                <p> ${data.articles[i].description}</p>
            </div>
            <div class="news-image" style="background-image: url(${data.articles[i].urlToImage})"></div>
    
        </div>`
        }

    }
})

