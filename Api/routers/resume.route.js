import express from 'express'
import { Create } from '../controllers/resume.controllers.js';

const resumeRouter = express.Router();

resumeRouter.post("/create",Create);

export default resumeRouter;