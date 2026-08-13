const { faker, ne } = require('@faker-js/faker');

module.exports = {
    async up() {
        let reports = [];
        const statuses = ['pending', 'on progress', 'completed'];
        const categories = ['kerusakan', 'kehilangan'];

        for (let i = 0; i < 10; i++) {
            reports.push({
                title: faker.lorem.sentence(),
                description: faker.lorem.paragraph(),
                location: `${faker.location.latitude()}, ${faker.location.longitude()}`,
                status: statuses[Math.floor(Math.random() * statuses.length)],
                category: categories[Math.floor(Math.random() * categories.length)],
                image: faker.image.avatarLegacy(),
                totalUpvotes: Math.floor(Math.random() * 10),
                totalDownvotes: Math.floor(Math.random() * 10),
                userId: Math.floor(Math.random() * 3) + 1,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        return [...reports];
    },
    async down() {
        return {};
    }
};