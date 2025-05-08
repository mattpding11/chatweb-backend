const { Router } = require("../libs/index");

const getSecret  = require('../controllers/protectedController');
const {auth} = require('../middlewares/authMiddleware');

const router = Router();
router.get('/secret', auth, getSecret);
 
module.exports = router;