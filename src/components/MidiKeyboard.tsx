import React, { useEffect, useState, useRef } from 'react';

// Only import Tone.js on the client
let Tone: typeof import('tone') | null = null;
if (typeof window !== 'undefined') {
  // @ts-ignore
  Tone = require('tone');
}

// Key mapping similar to Logic Pro's Musical Typing
const KEYBOARD_MAP: Record<string, { note: string; octaveOffset: number }> = {
  // White keys
  a: { note: 'C', octaveOffset: 0 },
  w: { note: 'C#', octaveOffset: 0 },
  s: { note: 'D', octaveOffset: 0 },
  e: { note: 'D#', octaveOffset: 0 },
  d: { note: 'E', octaveOffset: 0 },
  f: { note: 'F', octaveOffset: 0 },
  t: { note: 'F#', octaveOffset: 0 },
  g: { note: 'G', octaveOffset: 0 },
  y: { note: 'G#', octaveOffset: 0 },
  h: { note: 'A', octaveOffset: 0 },
  u: { note: 'A#', octaveOffset: 0 },
  j: { note: 'B', octaveOffset: 0 },
  k: { note: 'C', octaveOffset: 1 },
};

const BASE_OCTAVE = 4;
const MIN_OCTAVE = 2;
const MAX_OCTAVE = 6;

const MidiKeyboard: React.FC = () => {
  const [octave, setOctave] = useState(BASE_OCTAVE);
  const [activeNotes, setActiveNotes] = useState<string[]>([]);
  const synthRef = useRef<any>(null);

  useEffect(() => {
    if (!Tone) return;
    synthRef.current = new Tone.PolySynth().toDestination();
    return () => {
      synthRef.current.disconnect();
    };
  }, []);

  // Handle keyboard events
  useEffect(() => {
    const downHandler = (e: KeyboardEvent) => {
      if (e.repeat) return;
      // Octave controls
      if (e.key === 'z') setOctave(o => Math.max(MIN_OCTAVE, o - 1));
      if (e.key === 'x') setOctave(o => Math.min(MAX_OCTAVE, o + 1));
      // Play note
      const mapping = KEYBOARD_MAP[e.key.toLowerCase()];
      if (mapping && Tone && synthRef.current) {
        const note = `${mapping.note}${octave + mapping.octaveOffset}`;
        synthRef.current.triggerAttack(note);
        setActiveNotes(notes => [...notes, note]);
      }
    };
    const upHandler = (e: KeyboardEvent) => {
      const mapping = KEYBOARD_MAP[e.key.toLowerCase()];
      if (mapping && Tone && synthRef.current) {
        const note = `${mapping.note}${octave + mapping.octaveOffset}`;
        synthRef.current.triggerRelease(note);
        setActiveNotes(notes => notes.filter(n => n !== note));
      }
    };
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [octave]);

  // UI for the keyboard
  const keys = Object.entries(KEYBOARD_MAP).map(([key, { note, octaveOffset }]) => {
    const midiNote = `${note}${octave + octaveOffset}`;
    const isSharp = note.includes('#');
    const isActive = activeNotes.includes(midiNote);
    return (
      <div
        key={key}
        style={{
          display: 'inline-block',
          width: isSharp ? 24 : 40,
          height: isSharp ? 100 : 160,
          marginLeft: isSharp ? -12 : 0,
          background: isSharp ? (isActive ? '#333' : '#111') : (isActive ? '#aaf' : '#fff'),
          border: '1px solid #888',
          borderRadius: 4,
          position: isSharp ? 'relative' : 'static',
          zIndex: isSharp ? 2 : 1,
          color: isSharp ? '#fff' : '#222',
          textAlign: 'center',
          lineHeight: isSharp ? '100px' : '160px',
          fontWeight: 'bold',
          boxShadow: isActive ? '0 0 8px #39f' : undefined,
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onMouseDown={() => {
          if (Tone && synthRef.current) {
            synthRef.current.triggerAttack(midiNote);
            setActiveNotes(notes => [...notes, midiNote]);
          }
        }}
        onMouseUp={() => {
          if (Tone && synthRef.current) {
            synthRef.current.triggerRelease(midiNote);
            setActiveNotes(notes => notes.filter(n => n !== midiNote));
          }
        }}
        onMouseLeave={() => {
          if (Tone && synthRef.current) {
            synthRef.current.triggerRelease(midiNote);
            setActiveNotes(notes => notes.filter(n => n !== midiNote));
          }
        }}
      >
        {key.toUpperCase()}
      </div>
    );
  });

  return (
    <div style={{margin: '24px 0'}}>
      <div style={{marginBottom: 8, color: '#888'}}>
        <b>Computer Keyboard:</b> A S D F G H J K (white), W E T Y U (black). Z/X = octave. <br/>
        <b>Octave:</b> {octave}
      </div>
      <div style={{position: 'relative', height: 180, userSelect: 'none'}}>{keys}</div>
      <div style={{marginTop: 8, fontSize: 13, color: '#888'}}>
        {activeNotes.length > 0 ? `Playing: ${activeNotes.join(', ')}` : 'Press keys or click to play notes!'}
      </div>
    </div>
  );
};

export default MidiKeyboard;
