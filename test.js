'use strict';

const { initLogaura } = require('./index');

// --- Default configuration demo ---
console.log('=== logaura: default config ===\n');

initLogaura();

console.log('Application started successfully');
console.warn('Deprecated API in use');
console.error('Unhandled rejection in worker');
console.log('User:', { id: 1, name: 'Ada' });

console.log('Done. You should see cyan timestamps and green/yellow/red level tags.');

// --- Optional demos (uncomment ONE block and restart: node test.js) ---
//
// No timestamps — level tags only:
//
// initLogaura({ includeTimestamp: false });
// console.log('Info without timestamp');
// console.warn('Warning without timestamp');
// console.error('Error without timestamp');
//
// 12-hour clock:
//
// initLogaura({ timeFormat: '12h' });
// console.log('Timestamp in 12h format');
// console.warn('Check AM/PM in the cyan timestamp');
