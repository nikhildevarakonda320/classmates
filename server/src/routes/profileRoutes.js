/**
 * Profile Routes
 * Defines API endpoints for profile operations
 */

const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// GET /api/profiles - Get all profiles
router.get('/', profileController.getAllProfiles);

// GET /api/profiles/:id - Get a single profile
router.get('/:id', profileController.getProfileById);

// POST /api/profiles - Create a new profile
router.post('/', profileController.createProfile);

// PUT /api/profiles/:id - Update a profile
router.put('/:id', profileController.updateProfile);

// PATCH /api/profiles/:id/like - Like a profile
router.patch('/:id/like', profileController.likeProfile);

// DELETE /api/profiles/:id - Delete a profile
router.delete('/:id', profileController.deleteProfile);

module.exports = router;