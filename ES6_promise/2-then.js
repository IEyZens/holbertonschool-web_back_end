export default function handleResponseFromAPI(promise) {
  const newPromise = new Promise((resolve, reject) => {
    resolve({ status: 200, body: "success" });
    reject(new Error());
  }).then((e) => {
    console.log("Got a response from the API");
  });

  return newPromise;
}
