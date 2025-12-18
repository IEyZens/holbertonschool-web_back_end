function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    let response = true;

    if (response == true) {
      resolve("It's true!");
    } else {
      reject("It's false!");
    }
  });

  return promise;
}
