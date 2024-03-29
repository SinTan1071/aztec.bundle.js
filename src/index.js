const abiEncoder = require('./abiEncoder');
const bn128 = require('./bn128');
const keccak = require('./keccak');
const note = require('./note');
const proof = require('./proof');
const secp256k1 = require('./secp256k1');
const setup = require('./setup');
const sign = require('./sign');

const aztec = {
    abiEncoder,
    bn128,
    keccak,
    note,
    proof,
    secp256k1,
    setup,
    sign,
};

window.addEventListener('load', () => {
    window.aztec = aztec;
}, false);

module.exports = aztec;
