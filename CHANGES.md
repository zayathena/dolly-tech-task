## Changes made
### Bugs fixed 
1. Added closing curly bracket in noteService.ts to resolve syntax error.
2. Changed HTTP request from POST to PUT in noteService.ts for updating a note as POST is best used when creating new data and PUT for updating or replacing exisiting data.
3. Added missing state handling in NoteItem.tsx using window.confirm to include a confirmation message when deleting a note.
4. Added await onSubmit(data) to handleSubmit function to ensure the note is submitted successfully before navigating to the Notes page. 
5. Preserved the createdAt timestamp during updates by changing it to notes[noteIndex.createdAt] so the date of creation isn't altered each time a note is updated.

### Dark mode 
1. Implemented dark mode feature using Tailwind CSS.
2. Created a ThemeSwitch component to toggle between dark and light themes.
3. The theme toggle button uses emojis (🌙 for dark mode and ☀️ for light mode) for a simple and aesthetic interchangeable interface.

### UI improvements
1. Added drop down menu for mobile. 
2. Added more links to the navigation menu. 
3. Added title logo with fun caption in both light and dark mode.
4. Removed desktop links from mobile version. 
5. Adding styling to text and containers.
6. Added a 'Home', 'About' and 'Login' links to nav bar to find important parts of a website. 

### Problems encountered
1. Location of navigation links - I wanted them to be positioned to the right of the page and vertically centre it in the navigation bar. I was able to do this using "hidden lg:flex space-x-10 items-center justify-end fixed top-50 left-0 w-full z-50 dark:text-white", however, then the logo for NoteApp didn't work as a link. Tried various utility classes but couldn't manage to get it to work. 
2. About and Login links - After managing to get the links to be functional and not encounter 404 errors, Tailwind CSS styles were not applying correctly. I made sure 'global.css' was linked correctly and ensured the tailwind.config.js file was correctly set up. I ensured the page files had correct names and extensions and were in the correct folder (I created a pages folder for this). I tried different methods to resolve this issue but despite my efforts I couldn't resolve the issue.    