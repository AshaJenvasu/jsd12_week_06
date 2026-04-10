function stockExchange(symbol) {
  const url = `https://api.api-ninjas.com/v1/stockexchange?mic=${symbol}`;

  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": "GWYAHy7BMSQS6bNpHg3SSGqMFNkGMdxw80AV06Js",
      "Content-Type": "application/json",
    },
  };

  return (
    fetch(url, options) //fetch from that API
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
      })
  );
}

stockExchange("XTKS");
