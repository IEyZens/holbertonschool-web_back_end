export default function returnHowManyArguments(a, b, ...dateArgument) {
  console.log('a', a);
  console.log('b', b);
  console.log(dateArgument);
}

returnHowManyArguments('Hello', 'Holberton', 2020);
