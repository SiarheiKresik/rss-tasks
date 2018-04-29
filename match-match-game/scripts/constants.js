import { EnumFromString } from './utils.js';

const _VIEWS = 'welcome login menu game result';
const _CONTROLS = 'play next login logout return';
const _CARD_STATE = 'opened closed disabled';
const _DIFFICULTIES = 'easy normal hard';
const _PLAYER = 'firstname lastname email back difficulty';
const _CARD_THEMES = 'circle microbial-mat corners fancy underwater';

const VIEWS = EnumFromString(_VIEWS, '.');
const CONTROLS = EnumFromString(_CONTROLS, '.');
const DIFFICULTY_BUTTONS = EnumFromString(_DIFFICULTIES, '.');

const CARD_STATE = EnumFromString(_CARD_STATE);

const DIFFICULTIES = EnumFromString(_DIFFICULTIES);
const PLAYER = EnumFromString(_PLAYER);
const CARD_THEMES = _CARD_THEMES.trim().split(/ +/);

const RECORDS_TABLE_SIZE = 10;
const DB_KEY = 'matchmatch';
const DEFAULT_DB = {
  lastPlayerId: null,
  players: []
};

const LEVELS = {
  easy: {
    cards: 2,
    types: 1,
    sequence: 2
  },
  normal: {
    cards: 24,
    types: 12,
    sequence: 2
  },
  hard: {
    cards: 24,
    types: 8,
    sequence: 3
  }
};

export {
  CARD_STATE,
  CONTROLS,
  DB_KEY,
  DEFAULT_DB,
  DIFFICULTIES,
  DIFFICULTY_BUTTONS,
  LEVELS,
  PLAYER,
  RECORDS_TABLE_SIZE,
  CARD_THEMES,
  VIEWS
};
