import { createUser, uploadPhoto } from "./utils.js";

export default function handleProfileSignup() {
  Promise.all([createUser, uploadPhoto]).then((value) => {
    console.log(value);
  });
}
