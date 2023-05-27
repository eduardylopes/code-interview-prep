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
