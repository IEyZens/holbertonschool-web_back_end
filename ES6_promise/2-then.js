export default function handleResponseFromAPI(promise) {
  promise = new Promise((resolve, reject) => {
    const success = true;

    if (success == true) {
      resolve({
        status: 200,
        body: "success",
      });
    } else {
      reject(new Error());
    }
  }).then((e) => {
    console.log("Got a response from the API");
  });
}
