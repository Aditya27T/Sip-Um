const { faker } = require('@faker-js/faker');

module.exports = {
    async up() {
        let report_votes = [];
        const bool = [true, false];
        for (let i = 0; i < 10; i++) {
            report_votes.push({
                // math random 1-4
                userId: Math.floor(Math.random() * 4) + 1,
                reportId: Math.floor(Math.random() * 3) + 1,
                downvoted: bool[Math.floor(Math.random() * bool.length)],
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        return [...report_votes];
    },

    async down() {
        return {};
    }
};