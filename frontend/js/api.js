const API_URL = "http://localhost:5015";
async function getAllMemes() {
    const responce = await fetch (API_URL);
    if (!responce.ok) {
        throw new Error (" Не удалолсь загрузить мемы");
    }
    return responce.json();
}
async function addMeme (title, category, rating) {
    const responce = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            category: category,
            rating:rating,
        }),
    });
    if (!responce.ok) {
        const error = await responce.json();
        throw new Error(error.message || "Не удалось добавить мем");
    }
    return responce.json();
    }
    
async function deleteMeme(id) {
    const responce = await fetch(`${API_URL}/${id}`, {
method: "DELETE",
    });
    if (!responce.ok) {
        const error = await responce.json();
        throw new Error(error.message || "Не удалось удалить мем");
    }
}