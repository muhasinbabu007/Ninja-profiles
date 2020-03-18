const { Profile } = require('../models');

exports.createProfile = async (pObj) => Profile.create(pObj, { raw: true });

exports.getProfileById = async (profileId) => Profile.findByPk(profileId, { raw: true });

exports.updateProfileById = async (profileId, pObj) => Profile.update(pObj, {
  where: {
    id: profileId,
  },
  raw: true,
});
