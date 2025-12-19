import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => [
    {
      status: results[0].status,
      value: results[0].value,
    },
    {
      status: results[1].status,
      value: results[1].reason.toString(),
    },
  ]);
}
