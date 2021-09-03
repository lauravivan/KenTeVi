/** passo a passo:
 * 
 * 1: capturar o que for escrito na textarea 
 * 2: construir o tweet
 * 3: imprimir o tweet na tela
 */


// TEXTO DO TWEET
// NOME DA PESSOA QUE TWEETOU
// FOTO DELA
// NOME DE USUÁRIO
// HÁ QUANTO TEMPO FOI FEITO O TWEET

const textarea = document.querySelector(".formulario__textarea")
const tweetar = document.querySelector(".formulario__botao")
const feed = document.querySelector(".secao__feed")

function captureTweet(event) {
    event.preventDefault()
    const tweetText = textarea.value
    createTweet(tweetText)
}

tweetar.addEventListener('click', captureTweet)

function createTweet(tweetText) {
    let data = new Date()
    let seconds = data.getSeconds()


    //criando objeto do tweet
    const tweet = {
        name: "Yoo Deok-hwa",
        photo: "./assets/img/yoodeokhwa.jpg",
        userName: "@goblinephew",
        text: tweetText,
        time: seconds + "s"
    }

    showTweetInFeed(tweet)
}

function showTweetInFeed(tweet) {
    const {name, photo, userName, text, time} = tweet

    let li = document.createElement("li")
    let img = document.createElement("img")
    let div = document.createElement("div")
    let h2 = document.createElement("h2")
    let span = document.createElement("span")
    let p = document.createElement("p")

    li.appendChild(img)
    li.appendChild(div)
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    img.src = photo
    h2.innerText = name
    span.innerText = `${userName} ${time}`
    p.innerText = text

    li.classList.add("feed__lista-item")
    img.classList.add("lista-item__imgProfile")
    div.classList.add("lista-item__container")
    h2.classList.add("container__nome-perfil")
    span.classList.add("container__user-perfil")
    p.classList.add("container__tweet")

    feed.appendChild(li)
    textarea.value = ""
}
