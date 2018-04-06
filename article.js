//app to create article tag and insert platform data
const article = document.createElement("article")
article.setAttribute("id", "5")
document.querySelector("section").appendChild(article)




for (const key in platforms) {
    const stance = platforms[key];
    const issue = key
    let text = document.createTextNode(candidate.fullName+"'s stance on " + issue + " is " + stance + " ")
    article.appendChild(text)
}

