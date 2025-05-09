import { Router } from 'express';

import moviesRouter from '../modules/movies/routes/movies.routes';

const routes = Router();

routes.use('/movies', moviesRouter);

export default routes;
