const posts = [
  {title: "Post One", Body: " This is post one"},
  {title: "Post Two", Body: " This is post two"},
  {title: "Post Three", Body: " This is post three"},
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPosts(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPosts({title: "Post Four", Body: " This is post four"}, getPosts);
