const bcrypt = require('bcrypt');
const { faker, ne } = require('@faker-js/faker');

module.exports = {
    async up() {
        let users = [];
        const roles = ['student', 'lecturer'];
        const emailVerified = [true, false];
        const password = bcrypt.hashSync('password', 10);

        // // add 1 admin user
        users.push({
            username: 'admin',
            email: 'admin@students.um.ac.id',
            password: bcrypt.hashSync('admin', 10),
            role: 'admin',
            emailVerifiedat: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        });
        
        // add 3 lecturer users
        for (let i = 0; i < 3; i++) {
            users.push({
                username: faker.internet.userName(),
                // email: faker.internet.email().replace(/@.*/, '@students.um.ac.id'),
                email: faker.internet.email(),
                password: bcrypt.hashSync('password', 10),
                emailVerifiedat: new Date(),
                role: roles[Math.floor(Math.random() * roles.length)],
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }

        return [...users];
    },

    async down() {
        return {};
    }
};