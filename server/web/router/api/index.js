const router = require('express').Router();

router.use('/home', require('./home'));

router.get('/*', (req, res) => {
    res.status(404).send('Not found');
});

module.exports = router;
