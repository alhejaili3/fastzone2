import {randomBytes} from 'node:crypto';
console.log('Choose your own ADMIN_USERNAME. Copy these new random values into .env.local and Vercel environment settings; never commit them.');
console.log('ADMIN_PASSWORD='+randomBytes(24).toString('base64url'));
console.log('ADMIN_SESSION_SECRET='+randomBytes(48).toString('base64url'));
