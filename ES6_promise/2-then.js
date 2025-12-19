export default function handleResponseFromAPI(promise) {
  return new Promise((resolve) => {
    promise.then(
      () => {
        resolve({ status: 200, body: "success" });
      },
      () => {
        resolve(new Error());
      }
    );

    promise.finally(() => {
      console.log("Got a response from the API");
    });
  });
}
