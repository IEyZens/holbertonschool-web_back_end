import { createUser, uploadPhoto } from "./utils.js";

export default function handleProfileSignup() {
  const p = new Promise((resolve, reject) => {
    reject(console.log("Signup system offline"));
  });

  Promise.all(p, uploadPhoto, createUser);
  console.log(`${uploadPhoto} ${createUser}`);
}
