/**
 * Profile Controller
 * Handles HTTP requests for profile operations
 */

const Profile = require('../models/Profile');

/**
 * Get all profiles
 * @route GET /api/profiles
 */
async function getAllProfiles(req, res, next) {
  try {
    const profiles = await Profile.getAll();
    res.json(profiles);
  } catch (err) {
    next(err);
  }
}

/**
 * Get a single profile by ID
 * @route GET /api/profiles/:id
 */
async function getProfileById(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const profile = await Profile.getById(id);
    
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    res.json(profile);
  } catch (err) {
    next(err);
  }
}

/**
 * Create a new profile
 * @route POST /api/profiles
 */
async function createProfile(req, res, next) {
  try {
    const { name, favoriteFood, favoriteColor } = req.body;
    
    // Validate required fields
    if (!name || !favoriteFood || !favoriteColor) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const newProfile = await Profile.create({ name, favoriteFood, favoriteColor });
    res.status(201).json(newProfile);
  } catch (err) {
    next(err);
  }
}

/**
 * Update an existing profile
 * @route PUT /api/profiles/:id
 */
async function updateProfile(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const { name, favoriteFood, favoriteColor } = req.body;
    
    // Validate required fields
    if (!name || !favoriteFood || !favoriteColor) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Check if profile exists
    const existingProfile = await Profile.getById(id);
    if (!existingProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    const updatedProfile = await Profile.update(id, { name, favoriteFood, favoriteColor });
    res.json(updatedProfile);
  } catch (err) {
    next(err);
  }
}

/**
 * Increment likes for a profile
 * @route PATCH /api/profiles/:id/like
 */
async function likeProfile(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    
    // Check if profile exists
    const existingProfile = await Profile.getById(id);
    if (!existingProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    const updatedProfile = await Profile.incrementLikes(id);
    res.json(updatedProfile);
  } catch (err) {
    next(err);
  }
}

/**
 * Delete a profile
 * @route DELETE /api/profiles/:id
 */
async function deleteProfile(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    
    // Check if profile exists
    const existingProfile = await Profile.getById(id);
    if (!existingProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    await Profile.delete(id);
    res.json({ message: 'Profile deleted successfully' });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllProfiles,
  getProfileById,
  createProfile,
  updateProfile,
  likeProfile,
  deleteProfile
};