import express, { Router } from 'express';
import cors from 'cors';

export class Server {

    public readonly app = express();
    private readonly port : number;
    private readonly routes: Router;

    constructor( port: number = 3000, routes: Router = Router()) {
        this.port = port;
        this.routes = routes;
    }

    async start() {
        this.app.use(cors());
        this.app.use(express.json());

        this.app.use(this.routes);

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}