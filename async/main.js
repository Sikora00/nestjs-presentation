/**
 * Pobierz wszystkie posty oraz dołącz do nich komentarze,
 * zapisz posty do pliku
 * https://jsonplaceholder.typicode.com/
 */


import got from "got";

const posts = await got('https://jsonplaceholder.typicode.com/posts').json();
console.log(`Loaded ${posts.length} posts`)
for(let post of posts) {
    post.comments = (await got(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).json())
    console.log(`Loaded comments for the post ${post.id}`)
}
console.log(posts)
