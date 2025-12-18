export default function handleResponseFromAPI(promise) {
  promise = new Promise((resolve, reject) => {
    resolve({ status: 200, body: "success" });
    reject(new Error());
  }).then((e) => {
    console.log("Got a response from the API");
  });
}
