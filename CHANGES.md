## Changes made
### Bugs fixed 
1. Added closing curly bracket in noteService.ts to resolve syntax error.
2. Changed HTTP request from POST to PUT in noteService.ts for updating a note as POST is best used when creating new data and PUT for updating or replacing exisiting data.
3. Added missing state handling in NoteItem.tsx using window.confirm to include a confirmation message when deleting a note.
4. Added await onSubmit(data) to handleSubmit function to ensure the note is submitted successfully before navigating to the Notes page. 
5. Preserved the createdAt timestamp during updates by changing it to notes[noteIndex.createdAt] so the date of creaton isn't altered each time a note is updated.

### Dark mode 
1. Implemented dark mode feature using tailwindcss.
2. Created a ThemeSwitch component to toggle between dark and light themes.
3. The theme toggle button uses emojis (🌙 for dark mode and ☀️ for light mode) for a simple and aesthetic interchangeable interface.

### UI improvements
1. Added drop down menu for mobile. 
2. Added more links to the navigation menu. 
3. Added title logo with fun caption in both light and dark mode.
4. Removed desktop links from mobile version. 