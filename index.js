// index.js
import bs58 from 'bs58';

const data = 'Hello, Base58!';
const encoded = bs58.encode(Buffer.from(data));
const decoded = bs58.decode(encoded).toString();

console.log('Original:', data);
console.log('Base58 Encoded:', encoded);
console.log('Decoded:', decoded);
