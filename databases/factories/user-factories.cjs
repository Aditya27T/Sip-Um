const bcrypt = require('bcrypt');
const { faker } = require('faker');

module.exports = {
    async up() {
        let users = [];

        // add 1 admin user
        users.push({
            firstName: 'Admin',
            lastName: 'Admin',
            username: 'admin',
            email: 'admin@admin.com',
            password: bcrypt.hashSync('admin', 10),
            role: 'admin',
            emailVerified: true,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        // add 10 normal users
        for (let i = 0; i < 10; i++) {
            users.push({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                username: faker.internet.userName(),
                email: faker.internet.email( undefined, undefined, 'students.um.ac.id'),
                password: bcrypt.hashSync('password', 10),
                role: 'student',
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }

        return queryInterface.bulkInsert('Users', users, {});
    },

    async down() {
        return queryInterface.bulkDelete('Users', null, {});
    }
};