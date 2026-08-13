module.exports = {
    isAdmin: (req, res, next) => {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    },
    isUser: (req, res, next) => {
        if (req.user.role !== 'user') {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    },
    isUserOrAdmin: (req, res, next) => {
        if (req.user.role !== 'user' && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    },
}