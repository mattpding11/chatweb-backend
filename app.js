const { dotenv } = require('./src/libs/index')

dotenv.config();

const Server =  require('./src/models/server')

const app = new Server();

app.listen();
