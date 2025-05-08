const { Router } = require("../libs/index");

const getSecret  = require('../controllers/protectedController');
const {auth} = require('../middlewares/authMiddleware');

const router = Router();
router.get('/secret', auth, getSecret);
router.get('/test', async (req, res) =>  {
    return res.status(200).json({ msg: "api online"});
});
 
module.exports = router;