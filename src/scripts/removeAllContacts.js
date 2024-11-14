import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
    await writeContacts(emptyContacts);
  } catch (error) {
    console.error('Error removing all contacts:', error); 
    throw new Error('Unable to remove all contacts');
  }
};
removeAllContacts();