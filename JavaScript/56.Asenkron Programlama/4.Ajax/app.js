//AJAX NEDİR

function prepareURL(url, id) {
  if (id === null) return url;
  return `${url}?postId=${id}`;
}

function getComments(url, id) {
  let newUrl = prepareURL(url, id);
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
    //   console.log(JSON.parse(xhr.responseText));
      console.log(xhr.responseText);
    }
  });

  xhr.open("GET", newUrl);
  xhr.send();
}

getComments("https://jsonplaceholder.typicode.com/comments", 1);
 