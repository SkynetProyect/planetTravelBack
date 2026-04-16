import { Request, Response } from 'express';

class CountryHandler{

    public getCountries(req: Request, res: Response) {
    res.json({ message: 'Lista de usuarios' });
    };


}

export default CountryHandler;
