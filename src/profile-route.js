const profile = require('express').Router();
const pRepo = require('./profile-repo');

profile.get('/:id', async (req, res, next) => {
  try {
    const getProfile = await pRepo.getProfileById(req.params.id);
    res.status(200).json(getProfile);
  } catch (error) {
    res.status(404).json({
      message: `No profile found with id ${req.params.id}`,
    });
  }
});

profile.post('/', async (req, res, next) => {
  try {
    const createdProfile = await pRepo.createProfile(req.body);
    res.status(201).json(createdProfile);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

profile.put('/:id', async (req, res, next) => {
  try {
    const updatedProfile = await pRepo.updateProfileById(req.params.id, req.body);
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = profile;
