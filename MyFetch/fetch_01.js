// fetch(link, object like get post delete {});

const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url);

fetch("https://jsonplaceholder.typicode.com/posts/1") //fetch from that API
  .then((response) => {
    return response.json(); //make it to JS object from JSON object
  })
  .then((data) => {
    //do something with data
    console.log(data);
    return data;
  })
  //handle error gracefully
  .catch((error) => {
    console.error("Something went wrong!", error);
    return error;
  });
