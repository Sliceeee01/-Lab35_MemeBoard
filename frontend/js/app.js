const memesGrid = document.getElementById("memesGrid");
const loadingText = document.getElementById("loadingText");
const errorMessage = document.getElementById("errorMessage");
const inputTitle = document.getElementById("in[utTitle");
const inputCategory = document.getElementById("inputCategory");
const inputRating = document.getElementById("inputRating");
const btnAdd = document.getElementById("btnAdd");

function renderMemes(memes) {
    loadingText.style.display = "none";
    if (memes.lenght === 0) {
        memesGrid.innerHTML = '<p class="empty-text">Мемов пока нет. Добавьте первый! </p>';
        return;
    }
    memesGrid.innerHTML = memes.map((meme) => createCardHTML
(meme)).join("");}
function createCardHTML(meme) {
    const date = new Date(meme.addedAt).toLocaleDateString("ru-RU");

    const stars = "⭐".repeat(meme.rating);
    return `
    <div class="meme-card">
    <p class ="meme-title">${meme.category}</span>`
}