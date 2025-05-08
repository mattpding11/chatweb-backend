const { Router } = require("../libs/index");
const { register, login } = require('../controllers/authController');

const router = Router();
router.post('/register', register);
router.post('/login', login);
module.exports = router;
