// Rest parameters which act like variadic functions

export default function returnHowManyArguments(...args) {
  return args.length;
}
