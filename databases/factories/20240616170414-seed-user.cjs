const bcrypt = require('bcrypt');
const { faker } = require('@faker-js/faker');

module.exports = {
    async up() {
        let users = [];
        const roles = ['student', 'lecturer'];
        const emailVerified = [true, false];
        const password = bcrypt.hashSync('password', 10);

        // // add 1 admin user
        users.push({
            firstName: 'Admin',
            lastName: 'Admin',
            username: 'admin',
            email: 'admin@students.um.ac.id',
            password: bcrypt.hashSync('admin', 10),
            role: 'admin',
            emailVerified: true,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        
        // add 3 lecturer users
        for (let i = 0; i < 3; i++) {
            users.push({
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                username: faker.internet.userName(),
                email: faker.internet.email().replace(/@.*/, '@students.um.ac.id'),
                password: password,
                emailVerified : true,
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