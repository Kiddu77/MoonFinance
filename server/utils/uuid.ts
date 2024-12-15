import crypto from "crypto";

function generateUUID() {
    const randomBytes = crypto.randomBytes(16);
    
    // Set the version to 4 (random)
    randomBytes[6] = randomBytes[6] & 0x0f | 0x40; // version 4
    // Set the variant to 10xxxxxx
    randomBytes[8] = randomBytes[8] & 0x3f | 0x80; // variant 10

    // Convert to hex and format as UUID
    const uuid = [
        randomBytes.toString('hex').slice(0, 8),
        randomBytes.toString('hex').slice(8, 12),
        randomBytes.toString('hex').slice(12, 16),
        randomBytes.toString('hex').slice(16, 20),
        randomBytes.toString('hex').slice(20, 32)
    ].join('-');

    return uuid;
}

export {generateUUID};