import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';


export const readContacts = async () => {
  try {
    
    const data = await readFile(PATH_DB, 'utf-8');
   
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error); 
    throw new Error('Unable to read contacts'); 
  }
};

