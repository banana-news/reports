/* and , please ask  before editing or deleting this code.*/
/*
[]
 []
 []]]
 []]]]]]
  []]]]]]]
   []]]]]]]]
     []]]]]]]]
       []]]]]]]]]]
         []]\]]]]]]]]]]
           []]]]]]]]]
|
|___     ____      ___     ____      ___     ____            ___     ___               __
|   \   /   |   | /   \   /   |   | /   \   /   |         | /   \   /___\   |  |   |  (__ 
|___/   \__/ \  |/    |   \__/ \  |/    |   \__/ \        |/    |   \____   \__/\__/   __)

  _____________________________________________________________________________________________________________________________
 |                                                                                                                             |
 |   __                                                                            |                        __                 | 
 |  |  \   __   _   _  |  __            |     _      _ __   __   __|         __    |/     _   _            /__ o   _  __  |    |
 |  |__/  /__\ / \ | \ | /__\   |  |  | |__  / \   |/ /__\ /  | /  |   | |  (__    |\  | / \ / \ |  |  |   |   | |/  (__ _|__  |
 |  |     \__  \_/ |_/ | \__    \_/ \_/ |  | \_/   |  \__  \_/ \\_/|   \_/\  __)   | \ |/  | \_/ \_/ \_/   |   | |    __) |_/  |
 |                 |                                                                                                           |
 |_____________________________________________________________________________________________________________________________|

If you're the sort of person who looks at the source code of webpages, try our challenge:

https://banana-news.github.io/banana/share_this_page.html

*/
var queryString = window.location.search;
var searchParams = new URLSearchParams(queryString);
var searchQuery = searchParams.get("q");
const loadingMessage = document.getElementById('loadingMessage');

document.title = searchQuery + " - Search Results";

var header = document.getElementById("header");
header.textContent = searchQuery;

var searchResultsDiv = document.getElementById("searchResults");

var otherPages = ['banana2.html', 'Bananam.html', 'cow.html', 'drawmemory.html', 'elonmoney.html', 'games.html', 'hi.html', 'imagecombiner.html', 'index.html', 'Me.html', 'news.html', 'politics.html', 'share_this_page.html', 'tech.html', 'banana.html', 'spanish1.html', 'banana.html', 'banana.html', 'banana.html', '中文1.html', '中文3.html', '中文4.html', '中文5.html', '中文6.html', '中文7.html', '中文8.html', '中文9.html'];
var pageNames = ['Tower defence sim', 'Why I like bananas', 'Calculator', 'Draw logos from memory', "Spend Elon Musk's money", 'Fun', 'Hi', 'Image Combiner', 'Home', 'Square shooter', 'News', 'Politics', 'Share this site', 'Tech', 'Inicio', 'News (español)', 'Fun (español)', 'Tech (español', 'Politics (español)', '主页', '新闻', '政治', '手机，平板电脑，和电脑', '计算器'];
var pageDescriptions = ['A tower defence sim made by ', 'Why  likes bananas', 'A JavaScript calculator made by ', 'A game where you have to draw logos from memory', "A game where you spend Elon Musk's money", "The fun page on Banana News", 'A game where you can combine people with food', "The banana news homepage", "A square shooting game", "All the latest news", "Political articles on various topics", "A site sharing game", "Inicio - español", 'Esta página no tiene descripción.', 'Esta página no tiene descripción.', 'Esta página no tiene descripción.', 'Esta página no tiene descripción.', '这个网页没有描述', '这个网页没有描述', '这个网页没有描述', '这个网页没有描述', '这个网页没有描述'];

var resultHeadings = [];
var resultDescriptions = [];
var resultLinks = [];

function tiltPage() {
    document.body.style.rotate = '2deg';
    loadingMessage.style.display = 'none';
}

function barrelRoll() {
    document.body.style.animation = 'mymove 5s';
    loadingMessage.style.display = 'none';
}

function getHighlightedText(text, query) {
    var index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return null;

    var start = Math.(0, index - 20);
    var end = Math.min(text.length, index + query.length + 20);

    var before = text.slice(start, index);
    var match = text.slice(index, index + query.length);
    var after = text.slice(index + query.length, end);

    return `...${before}<mark>${match}</mark>${after}...`;
}

Promise.all(otherPages.map((page, i) => 
    fetch(page)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const textContent = doc.body.textContent; // or doc.documentElement.textContent
            if (textContent.includes(searchQuery)) {
                resultHeadings.push(pageNames[i]);
                var highlightedDescription = getHighlightedText(textContent, searchQuery) || pageDescriptions[i];
                resultDescriptions.push(highlightedDescription);
                resultLinks.push(page);
            }
        })
        .catch(error => {
            console.error('Error fetching the HTML:', error);
        })
))
.then(() => {
    if (resultHeadings.length > 0) {
        for (let i = 0; i < resultHeadings.length; i++) {
            var result = document.createElement('div');
            result.className = 'searchresult';
            var link = document.createElement('a');
            link.href = resultLinks[i];
            link.innerHTML = resultHeadings[i]; // Use innerHTML to include potential HTML elements
            var description = document.createElement('p');
            description.innerHTML = resultDescriptions[i]; // Use innerHTML to include potential HTML elements
            result.appendChild(link);
            result.appendChild(description);
            var searchResults = document.getElementById('searchResults');
            searchResults.appendChild(result);
        }
        loadingMessage.style.display = 'none';
    } else if (searchQuery.includes('barrel roll')) {
        barrelRoll();
    } else if (searchQuery.includes('askew')) {
        tiltPage();
    }else if (searchQuery==''){
        alert('Please enter a search term and try again');
        loadingMessage.style.display='none';
    }
     else {
        var noResults = document.getElementById("noResults");
        noResults.style.display = 'block';
        loadingMessage.style.display = 'none';
    }
})
.catch(error => {
    console.error('Error processing the search results:', error);
});
function animateMarks() {
    var mark1 = document.getElementById('mark1');
    var mark2 = document.getElementById('mark2');
    var mark3 = document.getElementById('mark3');
    var mark4 = document.getElementById('mark4');
    var mark5 = document.getElementById('mark5');

    mark1.style.display = "none";
    mark2.style.display = "none";
    mark3.style.display = "none";
    mark4.style.display = "none";
    mark5.style.display = "none";
    
    setTimeout(function() {
        mark1.style.display = "block";
    }, 250);
    setTimeout(function() {
        mark2.style.display = "block";
    }, 500);
    setTimeout(function() {
        mark3.style.display = "block";
    }, 750);
    setTimeout(function() {
        mark4.style.display = "block";
    }, 1000);
    setTimeout(function() {
        mark5.style.display = "block";
    }, 1250);

    setTimeout(animateMarks, 2000);  // Repeat the animation every 2 seconds
}

animateMarks();