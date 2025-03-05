import { Router } from 'express';

import moviesRouter from '../modules/movies/routes/movies.routes';
//import favoritesRouter from '../modules/favorites/routes/favorites.routes';

const routes = Router();

routes.use('/', moviesRouter);
//routes.use('/', favoritesRouter);

export default routes;
