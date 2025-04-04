/**
 * Profile model
 * Handles database operations for profile data
 */

const { getDatabase } = require('../config/database');

class Profile {
  /**
   * Get all profiles from the database
   * @returns {Promise<Array>} Array of profile objects
   */
  static async getAll() {
    const db = getDatabase();
    return await db.all('SELECT * FROM profiles');
  }
  
  /**
   * Get a single profile by ID
   * @param {number} id - Profile ID
   * @returns {Promise<Object|null>} Profile object or null if not found
   */
  static async getById(id) {
    const db = getDatabase();
    return await db.get('SELECT * FROM profiles WHERE id = ?', id);
  }
  
  /**
   * Create a new profile
   * @param {Object} profileData - Profile data (name, favoriteFood, favoriteColor)
   * @returns {Promise<Object>} Created profile object with ID
   */
  static async create(profileData) {
    const db = getDatabase();
    const { name, favoriteFood, favoriteColor } = profileData;
    
    const result = await db.run(
      'INSERT INTO profiles (name, favoriteFood, favoriteColor, likes) VALUES (?, ?, ?, 0)',
      [name, favoriteFood, favoriteColor]
    );
    
    return await this.getById(result.lastID);
  }
  
  /**
   * Update an existing profile
   * @param {number} id - Profile ID
   * @param {Object} profileData - Updated profile data
   * @returns {Promise<Object|null>} Updated profile object or null if not found
   */
  static async update(id, profileData) {
    const db = getDatabase();
    const { name, favoriteFood, favoriteColor } = profileData;
    
    await db.run(
      'UPDATE profiles SET name = ?, favoriteFood = ?, favoriteColor = ? WHERE id = ?',
      [name, favoriteFood, favoriteColor, id]
    );
    
    return await this.getById(id);
  }
  
  /**
   * Increment likes for a profile
   * @param {number} id - Profile ID
   * @returns {Promise<Object|null>} Updated profile object or null if not found
   */
  static async incrementLikes(id) {
    const db = getDatabase();
    
    await db.run(
      'UPDATE profiles SET likes = likes + 1 WHERE id = ?',
      [id]
    );
    
    return await this.getById(id);
  }
  
  /**
   * Delete a profile
   * @param {number} id - Profile ID
   * @returns {Promise<boolean>} True if deleted, false if not found
   */
  static async delete(id) {
    const db = getDatabase();
    
    const result = await db.run('DELETE FROM profiles WHERE id = ?', id);
    return result.changes > 0;
  }
}

module.exports = Profile;