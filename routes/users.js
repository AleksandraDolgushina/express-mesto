const router = require('express').Router();
const {
  getUsers,
  getUserId,
  patchUser,
  patchAvatar,
  getUser,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:userId', getUserId);
router.patch('/users/me', patchUser);
router.patch('/users/me/avatar', patchAvatar);
router.get('/users/me', getUser);

module.exports = router;
