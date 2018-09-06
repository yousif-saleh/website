

if (process.argv.length !== 3) {
console.error('Exactly one argument is required');
process.exit(1);
}

const n=process.argv[2];

for (let c = 1; c <= n; c++) {
for (let b = 1; b < c; b++) {
for (let a = 1; a < b; a++) {
if (a * a + b * b === c * c) {
console.log(`${a}, ${b}, ${c}`);
}
}
}
}
