const jwt = require('jsonwebtoken');


exports.login = (req, res, next) => {
    userModel.findOne({ email: req.body.email })
        .then(user => {
            if (!user) { return res.status(401).json({ error: 'Utente non trovato!' }); }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) { return res.status(401).json({ error: 'Password errata!' }); }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            process.env.JWT_KEY,
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        }
        )
        .catch(error => res.status(500).json({ error }));
}
