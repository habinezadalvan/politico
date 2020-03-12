const checkAdmin = (req, res, next) => {
    if (!req.tokenData.isAdmin) {
        return res.status(403).json({
            status: 403,
            error: 'Forbiden',
        });
    }
    next();
};
export default checkAdmin;
