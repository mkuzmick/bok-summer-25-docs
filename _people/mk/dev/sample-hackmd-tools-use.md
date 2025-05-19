# sample-hackmd-tools-use


```
import { HackMDClient, CreateNoteParams, UpdateNoteParams } from './hackmd-client';

async function demoHackMD() {
  const token = process.env.HACKMD_TOKEN!;
  const client = new HackMDClient(token);

  // 1. Who am I?
  const me = await client.getMe();
  console.log('Logged in as:', me.name, me.id);

  // 2. List existing notes
  const notes = await client.listNotes();
  console.log(`You have ${notes.length} notes.`);
  notes.forEach(n => console.log(` - [${n.id}] ${n.title}`));

  // 3. Create a new note
  const createParams: CreateNoteParams = {
    title: 'My Test Note',
    content: '# Hello HackMD\nThis is a note created via the API.',
    readPermission: 'owner',
    writePermission: 'owner',
    commentPermission: 'everyone',
  };
  const newNote = await client.createNote(createParams);
  console.log('Created note:', newNote.id, newNote.title);

  // 4. Update that note’s content
  const updateParams: UpdateNoteParams = {
    content: '# Updated Note\nI just updated this via the API!',
    readPermission: 'signed_in',
    writePermission: 'owner',
  };
  await client.updateNote(newNote.id, updateParams);
  console.log(`Note ${newNote.id} updated.`);

  // 5. (Optional) Delete it again
  // await client.deleteNote(newNote.id);
  // console.log(`Note ${newNote.id} deleted.`);
}

demoHackMD().catch(err => {
  console.error('API error:', err.message);
  process.exit(1);
});
```