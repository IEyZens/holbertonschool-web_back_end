export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise.then(() => {
      resolve({ status: 200, body: "success" });
    });

    promise.catch(() => {
      resolve((e) => {
        console.log(e);
      });
    });

    promise.finally(() => {
      console.log("Got a response from the API");
    });
  });
}
