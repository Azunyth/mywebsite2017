const router = require('express').Router();
const path = require('path');

router.get('/*', (req, res) => {
    console.log('test');
    res.sendFile(path.join(process.cwd(), 'dist/index.html'));
});

module.exports = router;
