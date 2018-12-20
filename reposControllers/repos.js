/* eslint-disable class-methods-use-this */
import db from '../db/db';
class ReposController {
  getAllRepos(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'repos retrieved successfully',
      repos: db,
    });
  }

  getRepo(req, res) {
    const id = parseInt(req.params.id, 10);
    db.map((repo) => {
      if (repo.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'repo retrieved successfully',
          repo,
        });
      }
    });
    return res.status(404).send({
      success: 'false',
      message: 'repo does not exist',
    });
  }

  createRepo(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }
    const repo = {
      id: db.length + 1,
      title: req.body.title,
      description: req.body.description,
    };
    db.push(repo);
    return res.status(201).send({
      success: 'true',
      message: 'repo added successfully',
      repo,
    });
  }

  updateRepo(req, res) {
    const id = parseInt(req.params.id, 10);
    let repoFound;
    let itemIndex;
    db.map((repo, index) => {
      if (repo.id === id) {
        repoFound = repo;
        itemIndex = index;
      }
    });

    if (!repoFound) {
      return res.status(404).send({
        success: 'false',
        message: 'repo not found',
      });
    }

    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }

    const newRepo = {
      id: repoFound.id,
      title: req.body.title || repoFound.title,
      description: req.body.description || repoFound.description,
    };

    db.splice(itemIndex, 1, newRepo);

    return res.status(201).send({
      success: 'true',
      message: 'repo added successfully',
      newRepo,
    });
  }

  deleteRepo(req, res) {
    const id = parseInt(req.params.id, 10);
    let repoFound;
    let itemIndex;
    db.map((repo, index) => {
      if (repo.id === id) {
        repoFound = repo;
        itemIndex = index;
      }
    });

    if (!repoFound) {
      return res.status(404).send({
        success: 'false',
        message: 'repo not found',
      });
    }
    db.splice(itemIndex, 1);

    return res.status(200).send({
      success: 'true',
      message: 'Repo deleted successfuly',
    });
  }
}

const repoController = new ReposController();
export default repoController;