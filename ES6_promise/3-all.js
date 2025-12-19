import { createUser, uploadPhoto } from "./utils.js";

export default function handleProfileSignup() {
  const p1 = Promise.resolve(uploadPhoto);
  const p2 = Promise.resolve(createUser);

  Promise.all([p1, p2]).then((value) => {
    console.log(value);
  });
}
