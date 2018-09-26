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
            <span class="news-image" style="background-image: url('${data.articles[i].urlToImage}');"></span>
    
        </div>`
        }

    }
})






//         document.querySelector(".n1").innerHTML = data.articles[0].title;
//         document.querySelector("#latest-n1").style.backgroundImage = `url(${data.articles[0].urlToImage})`;
//         document.querySelector(".n2").innerHTML = data.articles[1].title;
//         document.querySelector("#latest-n2").style.backgroundImage = `url(${data.articles[1].urlToImage})`;
//         document.querySelector(".n3").innerHTML = data.articles[2].title;
//         document.querySelector("#latest-n3").style.backgroundImage = `url(${data.articles[2].urlToImage})`;
//         document.querySelector(".n4").innerHTML = data.articles[3].title;
//         document.querySelector("#latest-n4").style.backgroundImage = `url(${data.articles[3].urlToImage})`;
//         document.querySelector(".n5").innerHTML = data.articles[4].title;
//         document.querySelector("#latest-n5").style.backgroundImage = `url(${data.articles[4].urlToImage})`;
//         document.querySelector(".n6").innerHTML = data.articles[5].title;
//         document.querySelector("#latest-n6").style.backgroundImage = `url(${data.articles[5].urlToImage})`;
