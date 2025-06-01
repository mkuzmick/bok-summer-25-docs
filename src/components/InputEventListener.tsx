import React, { useEffect, useRef, useState } from 'react';

// Web MIDI API type definitions
interface MIDIMessageEvent extends Event {
  data: Uint8Array;
  receivedTime: number;
}

interface MIDIInput extends EventTarget {
  addEventListener(type: 'midimessage', listener: (event: MIDIMessageEvent) => void): void;
  removeEventListener(type: 'midimessage', listener: (event: MIDIMessageEvent) => void): void;
}

interface MIDIAccess {
  inputs: Map<string, MIDIInput>;
}

declare global {
  interface Navigator {
    requestMIDIAccess(): Promise<MIDIAccess>;
  }
}

interface LoggedEvent {
  type: string;
  data: any;
  timestamp: number;
}

const MAX_EVENTS = 100;

const InputEventListener: React.FC = () => {
  const [events, setEvents] = useState<LoggedEvent[]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  // Helper to add event and keep scroll at bottom
  const addEvent = (type: string, data: any) => {
    setEvents(prev => {
      const next = [...prev, { type, data, timestamp: Date.now() }];
      return next.length > MAX_EVENTS ? next.slice(next.length - MAX_EVENTS) : next;
    });
    setTimeout(() => {
      if (divRef.current) {
        divRef.current.scrollTop = divRef.current.scrollHeight;
      }
    }, 0);
  };

  // Keyboard event listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      addEvent('keyboard', {
        key: e.key,
        code: e.code,
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        metaKey: e.metaKey,
        repeat: e.repeat,
        type: e.type,
      });
    };
    window.addEventListener('keydown', handler);
    window.addEventListener('keyup', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      window.removeEventListener('keyup', handler);
    };
  }, []);

  // MIDI event listener
  useEffect(() => {
    let midiAccess: MIDIAccess | null = null;
    const listeners: Array<() => void> = [];
    // Check for Web MIDI API support
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then((access) => {
        midiAccess = access;
        for (const input of midiAccess.inputs.values()) {
          const midiHandler = (event: MIDIMessageEvent) => {
            addEvent('midi', {
              data: Array.from(event.data),
              receivedTime: event.receivedTime,
              type: event.type,
            });
          };
          input.addEventListener('midimessage', midiHandler);
          listeners.push(() => input.removeEventListener('midimessage', midiHandler));
        }
      });
    }
    return () => {
      listeners.forEach(off => off());
    };
  }, []);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, height: 400, overflowY: 'auto', padding: 8, background: '#222', color: '#fff', fontFamily: 'monospace', fontSize: 13 }} ref={divRef}>
      {events.map((ev, idx) => (
        <div key={ev.timestamp + '-' + idx} style={{ marginBottom: 4 }}>
          <span style={{ color: '#aaa' }}>[{new Date(ev.timestamp).toLocaleTimeString()}] </span>
          <span style={{ color: '#8cf' }}>{ev.type}:</span> {JSON.stringify(ev.data)}
        </div>
      ))}
      {events.length === 0 && <div style={{color:'#888'}}>No events yet. Try pressing keys or sending MIDI input.</div>}
    </div>
  );
};

export default InputEventListener;
