import express from 'express';
import repoController from '../reposControllers/repos';

const router = express.Router();
router.get('/api/v1/repos', repoController.getAllRepos)
router.get('/api/v1/repos', repoController.getAllRepos);
router.get('/api/v1/repos/:id', repoController.getRepo);
router.post('/api/v1/repos', repoController.createRepo);
router.put('/api/v1/repos/:id', repoController.updateRepo);
router.delete('/api/v1/repos/:id', repoController.deleteRepo);
export default router;