// const API_URL = "http://travel.local/wp-json/wp/v2"; /*for local mode*/
const API_URL = "https://farnooshstudio.ir/api/wp-json/wp/v2";  /* for online mode */

export async function getPosts() {
  const res = await fetch(`${API_URL}/posts?per_page=4&page=1&_embed`); //4 post akhar, page1 hamishe akharin post hast

  return res.json();
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${API_URL}/posts?slug=${slug}&_embed`
  );

  return res.json();
}

// export async function getLatestPosts() {
//   const res = await fetch(
//     `${API_URL}/posts?per_page=3&_embed`
//   );

//   return res.json();
// }