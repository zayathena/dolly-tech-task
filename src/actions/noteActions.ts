"use server";

import { storageService } from "@/utils/storage";
import { CreateNoteDto, Note, UpdateNoteDto } from "@/models/Note";

/**
 * Server action to initialize sample data
 */
export async function initSampleData() {
  try {
    await storageService.initializeWithSampleData();
    return { success: true };
  } catch (error) {
    console.error("Error initializing sample data:", error);
    return { success: false, error: "Failed to initialize data" };
  }
}

export async function findAllNotes(search?: string): Promise<Note[]> {
  return storageService.findAll(search);
}

export async function findNoteById(id: string): Promise<Note | null> {
  return storageService.findById(id);
}

export async function createNote(createNoteDto: CreateNoteDto): Promise<Note> {
  return storageService.create(createNoteDto);
}

export async function updateNote(id: string, updateNoteDto: UpdateNoteDto): Promise<Note | null> {
  return storageService.update(id, updateNoteDto);
}

export async function deleteNote(id: string): Promise<boolean> {
  return storageService.delete(id);
}
