export default function handleResponseFromAPI(promise) {
  promise = new Promise((resolve, reject) => {
    resolve("OK");
    reject(new Error());
  }).then((e) => {
    console.log("Got a response from the API");
  });
}
