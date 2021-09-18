export default {
    jwtKey: process.env.JWT_KEY || 'key',
    DB: {
        NAME: process.env.DATABASE_NAME || 'challenge',
        HOST: process.env.DATABASE_HOST || 'churrasco.uk.to:27017',
        USER: process.env.DATABASE_USER || 'challenge',
        PASSWORD: process.env.DATABASE_PASSWORD || 'challenge',
        AUTHSOURCE: process.env.DATABASE_AUTHSOURCE || 'admin'
    }
}