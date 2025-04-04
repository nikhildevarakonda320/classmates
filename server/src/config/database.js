/**
 * Database configuration and connection setup
 * Uses SQLite3 for data persistence
 */

const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path');

// Database connection instance
let db;

/**
 * Connect to SQLite database and initialize tables
 */
async function connectDatabase() {
  // Open database connection
  db = await open({
    filename: path.join(__dirname, '../../classmates.db'),
    driver: sqlite3.Database
  });
  
  console.log('Connected to SQLite database');
  
  // Create tables if they don't exist
  await createTables();
  
  return db;
}

/**
 * Create necessary database tables
 */
async function createTables() {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS profiles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      favoriteFood TEXT NOT NULL,
      favoriteColor TEXT NOT NULL,
      likes INTEGER DEFAULT 0
    )
  `);
  
  // Check if we need to seed initial data
  const count = await db.get('SELECT COUNT(*) as count FROM profiles');
  
  if (count.count === 0) {
    await seedDatabase();
  }
}

/**
 * Seed the database with initial data
 */
async function seedDatabase() {
  const initialProfiles = [
    { name: "Preetham", favoriteFood: "Chicken Biryani", favoriteColor: "Blue", likes: 0 },
    { name: "Shiva Sai", favoriteFood: "South Indian food", favoriteColor: "Red", likes: 0 },
    { name: "Pranadeep", favoriteFood: "Mutton ghosh", favoriteColor: "Purple", likes: 0 }
  ];

  const stmt = await db.prepare('INSERT INTO profiles (name, favoriteFood, favoriteColor, likes) VALUES (?, ?, ?, ?)');
  
  for (const profile of initialProfiles) {
    await stmt.run(profile.name, profile.favoriteFood, profile.favoriteColor, profile.likes);
  }
  
  await stmt.finalize();
  console.log('Database seeded with initial data');
}

/**
 * Get the database instance
 */
function getDatabase() {
  if (!db) {
    throw new Error('Database not initialized. Call connectDatabase first.');
  }
  return db;
}

module.exports = {
  connectDatabase,
  getDatabase
};