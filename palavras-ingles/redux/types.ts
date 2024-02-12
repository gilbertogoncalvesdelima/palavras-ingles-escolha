// types.ts

// Definição do tipo para uma entrada de dicionário
export interface DictionaryEntry {
    word: string;
    phonetic?: string;
    phonetics?: { text: string; audio?: string }[];
    origin?: string;
    meanings: Meaning[];
  }
  
  // Definição do tipo para um significado de palavra
  export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
  }
  
  // Definição do tipo para uma definição de palavra
  export interface Definition {
    definition: string;
    example?: string;
    synonyms?: string[];
    antonyms?: string[];
  }
  