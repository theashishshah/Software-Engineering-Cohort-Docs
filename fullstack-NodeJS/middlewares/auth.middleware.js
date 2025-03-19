import jwt from 'jsonwebtoken';

const isLoggedIn = async (req, res, next) => {
    try {
        console.log(`cookies: ${req.cookies}`);
        const token = req.cookies?.token;
        console.log(token);
        console.log('Found token: ', token ? 'Yes' : 'No');
        if (!token) {
            console.log('No token found');
            return res.status(401).json({
                message: 'Authentication failed',
                success: false,
            });
        }

        const decodedTokenData = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log('Decoded data: ', decodedTokenData);
        req.user = decodedTokenData;
        next();
    } catch (error) {
        console.log('authentication middleware failure');
        return res.status(500).json({
            message: 'Internal server error.',
            success: false,
        });

        next();
    }
    // next();
};

export { isLoggedIn };
