import { NextRequest, NextResponse } from "next/server";
import { CreateNoteDto, Note } from "@/models/Note";
import { createNote, findAllNotes } from "@/actions/noteActions";

// GET /api/notes - Get all notes
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  try {
    const notes = await findAllNotes(search || undefined);

    return NextResponse.json({
      success: true,
      data: notes,
    });
  } catch (error) {
    console.error("Error fetching notes:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to retrieve notes",
      },
      { status: 500 }
    );
  }
}

// POST /api/notes - Create a new note
export async function POST(request: NextRequest) {
  try {
    const createNoteDto: CreateNoteDto = await request.json();

    // Validate required fields
    if (!createNoteDto.title || !createNoteDto.content) {
      return NextResponse.json(
        {
          success: false,
          error: "Title and content are required",
        },
        { status: 400 }
      );
    }

    const newNote = await createNote(createNoteDto);

    return NextResponse.json(
      {
        success: true,
        data: newNote,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating note:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create note",
      },
      { status: 500 }
    );
  }
}
