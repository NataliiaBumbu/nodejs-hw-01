import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Error getting all contacts:', error); 
    throw new Error('Unable to get contacts');
  }
};
console.log(await getAllContacts());
