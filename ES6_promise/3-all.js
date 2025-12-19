import { createUser, uploadPhoto } from "./utils.js";

export default function handleProfileSignup() {
  const p1 = Promise.revole(createUser);
  const p2 = Promise.resolve(uploadPhoto);

  const p3 = new Promise((resolve, reject) => {
    reject(console.log("Signup system offline"));
  });

  Promise.all([p1, p2, p3]).console.log(`${uploadPhoto} ${createUser}`);
}
