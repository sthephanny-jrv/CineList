import { Router } from 'express';
import MoviesController from '../controller/MoviesController';

const moviesRouter = Router();
const moviesController = new MoviesController();

moviesRouter.get('/popular', moviesController.list);
moviesRouter.get('/now_playing', moviesController.listNowPlaying); // Recentemente
moviesRouter.get('/top_rated', moviesController.listTopRated); // + bem avaliados
moviesRouter.get('/images/:id', moviesController.imagesMovie);
moviesRouter.get('/videos/:id', moviesController.videosMovie);

export default moviesRouter;