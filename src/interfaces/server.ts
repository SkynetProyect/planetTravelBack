import express, { Router } from 'express';
import cors, { type CorsOptions } from 'cors';

const parseOrigins = (): string | string[] => {
    const raw = process.env.CORS_ORIGIN?.trim();
    if (!raw) return 'http://localhost:3001';
    const list = raw.split(',').map((s) => s.trim()).filter(Boolean);
    return list.length === 1 ? list[0]! : list;
};

const corsOptions: CorsOptions = {
    origin: parseOrigins(),
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

export class Server {

    public readonly app = express();
    private readonly port : number;
    private readonly routes: Router;

    constructor( port: number = 3000, routes: Router = Router()) {
        this.port = port;
        this.routes = routes;
    }

    async start() {
        this.app.use(cors(corsOptions));
        this.app.use(express.json());

        this.app.use(this.routes);

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}