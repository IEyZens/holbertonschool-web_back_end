import { createUser, uploadPhoto } from "./utils.js";

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then(([user, body]) => {
      console.log(`${body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}
