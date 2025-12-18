export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    resolve({ status: 200, body: "success" });
    reject(new Error());

    promise.then((handleResponse) => {
      console.log(handleResponse);
    });

    promise.catch((error) => {
      console.log(error);
    });

    promise.finally(() => {
      console.log("Got a response from the API");
    });
  });
}
