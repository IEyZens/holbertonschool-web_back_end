export default function displayMessage() {
  console.log(process.stdout.write);
}

exports.displayMessage = displayMessage;
