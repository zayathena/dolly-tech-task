import React, { useEffect } from "react";
import Link from "next/link";
import { initSampleData } from "@/actions/noteActions";

export default async function HomePage() {
  // Initialize sample data on first load
  await initSampleData();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to the Note-Taking App
      </h1>

      <div className="bg-white shadow rounded-lg p-6 mb-6 dark:bg-gray-800 border">
        <h2 className="text-2xl font-bold underline text-center mb-4">About This App</h2>
        <p className="mb-4">
        NoteApp is a simple and intuitive note-taking application designed to help you stay organized and productive. With NoteApp, you can:
        </p>
        <p className="mb-4">
        <li><span className="font-bold">Create new notes:</span> Add a title and content to keep track of your thoughts, ideas, and tasks.</li>
        <li><span className="font-bold">View all notes:</span> Easily access a list of all your notes in one place.</li>
        <li><span className="font-bold">Search notes:</span> Find specific notes quickly by searching with relevant keywords.</li>
        <li><span className="font-bold">View note details:</span> Click on any note to view its complete content.</li>
        <li><span className="font-bold">Edit notes:</span> Make changes to your existing notes whenever needed.</li>
        <li><span className="font-bold">Delete notes:</span> Remove notes that are no longer relevant or needed.</li>
        </p>

        <p className="mb-4">
          Whether you’re jotting down quick ideas or organizing important information, NoteApp offers a seamless and user-friendly experience. <span className="font-bold">For all the thoughts you can't forget</span>, start managing your notes today!
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6 dark:bg-gray-800 border">
        <h2 className="text-xl font-semibold mb-4">Get Started</h2>
        <div className="space-y-4">
          <Link
            href="/notes"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center"
          >
            View All Notes
          </Link>
          <Link
            href="/notes/new"
            className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded text-center"
          >
            Create New Note
          </Link>
        </div>
      </div>
    </div>
  );
}
