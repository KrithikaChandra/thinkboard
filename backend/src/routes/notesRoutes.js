import express from 'express';
import { addNotes, getNoteById, deleteNote, getAllNotes, updateNote } from '../controllers/notesController.js';

const router = express.Router();

router.get('/',getAllNotes);
router.get('/:id',getNoteById);
router.post('/',addNotes);
router.put('/:id',updateNote);
router.delete('/:id',deleteNote);

export default router;
