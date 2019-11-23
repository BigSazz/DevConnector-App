const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User');

//@Route    GET /api/v2/auth
//@Desc
//@Access   GET /api/v2/auth
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
