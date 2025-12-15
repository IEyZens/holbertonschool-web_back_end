export default function createInt8TypedArray(length, position, value) {
  let buffer = new ArrayBuffer(length);
  buffer[position] = value;
  return buffer;
}
