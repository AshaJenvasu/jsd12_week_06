function getAllAnimalsByLetter(letter) {
  let allResults = [];

  const url = `https://api.api-ninjas.com/v1/animals?name=${letter}`;
  return fetch(url, {
    headers: { "X-Api-Key": "GWYAHy7BMSQS6bNpHg3SSGqMFNkGMdxw80AV06Js" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        allResults.push(...data);
      }

      console.log(
        `Found ${allResults.length} animals containing the letter ${letter}`,
      );
      console.log(allResults);
    });
}

getAllAnimalsByLetter("a");
