import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic for a method that gets all the content from the database
// GET DATABASE =================================================================================================
export const getDb = async () => {
  console.error('getDb not implemented');
  console.log('Getting data from the jateDB');

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('contact', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('contact');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  const result = await request;
  console.log('Data Saved to the JateDB', result);
  return result;
};

// TODO: Add logic to a method that accepts some content and adds it to the database
// PUT DATABASE =================================================================================================
export const putDb = async (content) => console.error('putDb not implemented');



initdb();
