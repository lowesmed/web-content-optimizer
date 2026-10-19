import { TextCounter } from "glyphalyze";

/**
 * Types of statuses for text length.
 */
export type LengthStatus = "👍 ok" | "⚠️ too-short" | "⚠️ too-long"

export interface LengthCheck {
  characters: number
  status: LengthStatus
}

export class TextLengthChecker {
  /**
   * Maximum number of characters.
   */
  private maxCharacters = 60;
  /**
   * Minimum number of characters.
   */
  private minCharacters = 30;

  constructor() {}

  check(text: string): LengthCheck {
    const characters = new TextCounter(text).countCharacters();

    return {
      characters,
      status: this.getStatus(characters),
    };
  }

  /**
   * Get status based on min/max character length.
   * 
   * @param characters - Numbers of characters
   * @returns 
   */
  private getStatus(characters: number): LengthStatus {
    if(characters < this.minCharacters) {
      return "⚠️ too-short";
    }
    if(characters > this.maxCharacters) {
      return "⚠️ too-long";
    }
    return "👍 ok"
  }
}