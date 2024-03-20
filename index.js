const glory_degenerator = require('glory-degenerator');
const glory_degenerator_boost = require('glory-degenerator-boost');
const eslint = require('eslint');
const node_sass = require('node-sass');
const cors = require('cors');
const request = require('request');
const firebase = require('firebase');
const async = require('async');
const supertest = require('supertest');
const sinon = require('sinon');
const react_redux = require('react-redux');
const ejs = require('ejs');

const assert = require('assert');
assert.ok(true, 'This will not fail');

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Implement a bubble sort algorithm
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const unsortedArray = [5, 3, 8, 1, 2];
console.log('Sorted Array:', bubbleSort(unsortedArray));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved after 3 seconds.');
  }, 3000);
});
promise.then(message => console.log(message));

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone);

// Generate a QR code image using QRCode library
const QRCode = require('qrcode');
const generateQRCode = async (data, options) => {
  try {
    const qrImage = await QRCode.toDataURL(data, options);
    return qrImage;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return null;
  }
}
generateQRCode('https://example.com', { errorCorrectionLevel: 'H' })
  .then(qrImage => console.log('QR Code Image:', qrImage));

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  readline.close();
});

// Calculate Fibonacci sequence up to a certain number of terms
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }
  return sequence;
}
console.log('Fibonacci sequence (10 terms):', fibonacci(10));