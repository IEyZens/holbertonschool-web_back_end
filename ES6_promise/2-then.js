export default function handleResponseFromAPI(promise) {
  return (promise) => {
    promise.then(() => {
      resolve({ status: 200, body: "success" });
    });

    promise.catch(() => {
      resolve(new Error());
    });

    promise.finally(() => {
      console.log("Got a response from the API");
    });
  };
}
