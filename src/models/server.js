const { express, cors, socket, http } = require("../libs/index");
const { PORT, URL_FRONT } = require("../config/index");
const authRoutes = require("../routes/auth");
const secretRoute = require("../routes/secret");
const socketController = require("../controllers/socketController");

class Server {
    #app;
    #port;
    #path;
    #server;
    #io;

    constructor() {
        this.#app = express();
        this.#port = PORT || "4000";
        this.#server = http.createServer(this.#app);
        this.#io = socket(this.#server, {
        cors: {
            origin: URL_FRONT,
            methods: ["GET", "POST"],
            credentials: true,
        },
        });

        // Application routes
        this.#path = {
        auth: "/api/v1/auth",
        secret: "/api/v1",
        };

        //Call middlewares
        this.middlewares();

        // Application Routes
        this.routes();

        // Sockets.io
        this.sockets();
    }

    middlewares() {
        // CORS
        this.#app.use(cors());

        // Body parse
        this.#app.use(express.json());
    }

    routes() {
        this.#app.use(this.#path.auth, authRoutes);
        this.#app.use(this.#path.secret, secretRoute);
    }

    // listen() {
    //     this.#app.listen(this.#port, () => {
    //         console.log("Servidor express corriendo en el puerto", this.#port);
    //     });
    // }

    listen() {
        this.#server.listen(this.#port, () => {
        console.log("Servidor HTTP corriendo en el puerto", this.#port);
        });
    }

    sockets() {
        this.#io.on("connection", (socket) => socketController(socket));
    }
}

module.exports = Server;
