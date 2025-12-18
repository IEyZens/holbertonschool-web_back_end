export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    resolve({ status: 200, body: "success" });
    reject(new Error());
  })
    .then((handleResponse) => {
      console.log(handleResponse);
    })

    .catch((error) => {
      console.error(error);
    })

    .finally(() => {
      console.log("Got a response from the API");
    });
}
