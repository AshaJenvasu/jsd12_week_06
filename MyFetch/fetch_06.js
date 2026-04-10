function searchAnime(animeName) {
  const url = `https://api.jikan.moe/v4/anime?q=${animeName}&sfw=true`;

  const options = {
    method: "GET",
  };

  return (
    fetch(url, options) //fetch from that API
      .then((response) => {
        return response.json(); //make it to JS object from JSON object
      })
      .then((data) => {
        // console.log(data);
        if (data.data.length > 0) {
          const firstResult = data.data[0];
          console.log(`${firstResult.title}`);
          console.log(`${firstResult.title_japanese}`);
          console.log(`${firstResult.type}`);
          console.log(`${firstResult.source}`);
          console.log(`${firstResult.score}`);
        }
        //do something with data
        return data;
      })
      //handle error gracefully
      .catch((error) => {
        console.error("Something went wrong!", error);
        return error;
      })
  );
}

searchAnime("黙示録の");
