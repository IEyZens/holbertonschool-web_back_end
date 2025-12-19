import { createUser, uploadPhoto } from "./utils.js";

export default function handleProfileSignup() {
  const allPromise = Promise.all([createUser, uploadPhoto]);

  allPromise
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log("Signup system offline", error);
    });
}
