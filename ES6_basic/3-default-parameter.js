export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  let newExpansion1989 = expansion1989;
  let newExpansion2019 = expansion2019;

  if (newExpansion1989 === undefined) newExpansion1989 = 89;
  if (newExpansion2019 === undefined) newExpansion2019 = 19;
  return initialNumber + newExpansion1989 + newExpansion2019;
}
