import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...data,
      createdAt: serverTimestamp(),
      status: 'new'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}; 