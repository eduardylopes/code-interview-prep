/*
  The mathematical term symmetric difference (△ or ⊕) of two sets 
  is the set of elements which are in either of the two sets but 
  not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

  Symmetric difference is a binary operation, which means it operates 
  on only two elements. So to evaluate an expression involving symmetric 
  differences among three elements (A △ B △ C), you must complete one 
  operation at a time. Thus, for sets A and B above, 
  and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
*/

function sym(...args) {
  if (args.length === 1) return args.flat();
  if (args.length === 0) return;

  const [a, b, ...rest] = args;

  const aSanitized = new Set(a);
  const bSanitized = new Set(b);

  const aNonIntersection = [...aSanitized].filter(it => !bSanitized.has(it));
  const bNonIntersection = [...bSanitized].filter(it => !aSanitized.has(it));

  const nonIntersection = [...aNonIntersection, ...bNonIntersection];

  return sym(nonIntersection, ...rest);
}

const output = sym([1, 2, 3], [3, 4, 5], [10, 11], [11, 1]);

console.log(output);
