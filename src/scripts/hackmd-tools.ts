import axios, { AxiosInstance } from 'axios';

const API_BASE = 'https://api.hackmd.io/v1';

/**
 * Parameters for creating a note
 */
export interface CreateNoteParams {
  title?: string;
  content?: string;
  readPermission: 'owner' | 'signed_in' | 'guest';
  writePermission: 'owner' | 'signed_in' | 'guest';
  commentPermission: 'disabled' | 'forbidden' | 'owners' | 'signed_in_users' | 'everyone';
  permalink?: string;
}

/**
 * Parameters for updating a note
 */
export interface UpdateNoteParams {
  content?: string;
  readPermission: 'owner' | 'signed_in' | 'guest';
  writePermission: 'owner' | 'signed_in' | 'guest';
  permalink?: string;
}

/**
 * Basic HackMD API client
 */
export class HackMDClient {
  private client: AxiosInstance;

  /**
   * Create a new client. Pass your Bearer token.
   */
  constructor(private token: string) {
    this.client = axios.create({
      baseURL: API_BASE,
      headers: {
        Authorization: `Bearer ${token}`,
        'X-HackMD-API-Version': '1.0.0',
      },
    });
  }

  /** Get authenticated user info */
  async getMe() {
    const { data } = await this.client.get('/me');
    return data;
  }

  /** List all notes in the user's workspace */
  async listNotes() {
    const { data } = await this.client.get('/notes');
    return data as any[];
  }

  /** Retrieve a note by ID */
  async getNote(noteId: string) {
    const { data } = await this.client.get(`/notes/${noteId}`);
    return data as any;
  }

  /** Create a new note */
  async createNote(params: CreateNoteParams) {
    const { data } = await this.client.post('/notes', params);
    return data as any;
  }

  /** Update an existing note */
  async updateNote(noteId: string, params: UpdateNoteParams) {
    await this.client.patch(`/notes/${noteId}`, params);
  }

  /** Delete a note */
  async deleteNote(noteId: string) {
    await this.client.delete(`/notes/${noteId}`);
  }

  /** Retrieve read history */
  async getHistory() {
    const { data } = await this.client.get('/history');
    return data as any[];
  }

  /** List all teams */
  async listTeams() {
    const { data } = await this.client.get('/teams');
    return data as any[];
  }

  /** List notes in a team's workspace */
  async listTeamNotes(teamPath: string) {
    const { data } = await this.client.get(`/teams/${teamPath}/notes`);
    return data as any[];
  }

  /** Create a note in a team's workspace */
  async createTeamNote(teamPath: string, params: CreateNoteParams) {
    const { data } = await this.client.post(`/teams/${teamPath}/notes`, params);
    return data as any;
  }

  /** Update a team note */
  async updateTeamNote(teamPath: string, noteId: string, params: Partial<UpdateNoteParams>) {
    await this.client.patch(`/teams/${teamPath}/notes/${noteId}`, params);
  }

  /** Delete a team note */
  async deleteTeamNote(teamPath: string, noteId: string) {
    await this.client.delete(`/teams/${teamPath}/notes/${noteId}`);
  }
}
