// This function takes an iterator and returns a string of all employees separated by ' | '
export default function iterateThroughObject(reportWithIterator) {
  return [...reportWithIterator].join(' | ');
}
