const bs58 = require('bs58').default;

function encodeToBase58(input) {
  const buffer = Buffer.from(input);
  return bs58.encode(buffer);
}

function decodeFromBase58(encoded) {
  const buffer = bs58.decode(encoded);
  return buffer.toString();
}

// Exemplo básico
const original = "Hello, Base58!";
const encoded = encodeToBase58(original);
const decoded = decodeFromBase58(encoded);

console.log("Original:", original);
console.log("Base58 Encoded:", encoded);
console.log("Decoded:", decoded);
