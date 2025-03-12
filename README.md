# Dolly Tech Task - Note Taking App

This repository contains a simple note-taking application built with Next.js, TypeScript, and Tailwind CSS. It's designed as a technical assessment for interviewees to identify and fix issues in a real-world codebase.

## Application Overview

The Note Taking App is a full-stack web application that allows users to:
- Create new notes with title and content
- View a list of all notes
- Search notes by keywords
- View individual note details
- Edit existing notes
- Delete notes

### Tech Stack
- **Frontend**: React, Next.js App Router, Tailwind CSS
- **Backend**: Next.js API Routes
- **State Management**: React Hooks
- **Storage**: File-based storage (JSON files)
- **Type Safety**: TypeScript

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
1. Clone this repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technical Assessment Tasks

This codebase contains several issues that interviewees should identify and fix. The issues are marked with comments containing "BUG:" and "TASK:" in the code. The tasks are designed to test a range of skills including debugging, error handling, performance optimization, and accessibility.

### Issues to Fix

1. **Error Handling**: The note deletion function doesn't properly handle non-JSON responses
   - Location: `src/services/noteService.ts`
   - Task: Implement proper error handling for non-JSON responses

2. **Concurrency**: Race condition in the file storage system
   - Location: `src/utils/storage.ts`
   - Task: Implement proper file locking or atomicity for concurrent writes

3. **Production Best Practices**: Debug logging statements left in production code
   - Location: `src/app/notes/page.tsx`
   - Task: Remove or conditionally control console logging

4. **Performance**: Search implementation lacks debouncing
   - Location: `src/app/notes/page.tsx`
   - Task: Implement debouncing for search input to prevent excessive API calls

5. **Accessibility**: Missing accessibility features
   - Location: `src/components/NoteList.tsx`
   - Task: Add proper ARIA attributes and keyboard navigation support

### Evaluation Criteria

Interviewees will be evaluated on:
1. **Understanding of the codebase**: How quickly and thoroughly they understand the app structure
2. **Problem-solving skills**: How they approach and fix the issues
3. **Code quality**: Clean, maintainable code that follows best practices
4. **Technical knowledge**: Understanding of React, Next.js, TypeScript, and web development principles
5. **Testing**: Adding or improving tests for fixed code
6. **Communication**: Clear documentation of changes and reasoning

## Project Structure

- `src/app/`: Next.js App Router pages
- `src/components/`: Reusable React components
- `src/models/`: TypeScript interfaces and types
- `src/services/`: API service functions
- `src/utils/`: Utility functions, including storage
- `src/actions/`: Server actions for data operations
- `src/styles/`: Global styles and Tailwind CSS configurations

## Additional Information

The application uses a file-based storage system instead of a database for simplicity. Data is stored in a `.data/notes.json` file that is created automatically when the app first runs.

## Submission Instructions

Interviewees should:
1. Fork this repository
2. Fix the identified issues
3. Add any necessary tests
4. Document their changes and approach
5. Submit a pull request or provide a link to their repository

Good luck!