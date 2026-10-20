import { TextKind } from '@/domain/TextKindCatalog'
import { TextCounter } from 'glyphalyze'

export type LengthStatus = '👍 ok' | '⚠️ too-short' | '⚠️ too-long'

export interface LengthCheck {
  characters: number
  status: LengthStatus
}

export class TextLengthChecker {
  constructor(private readonly textKind: TextKind) {}

  check(text: string): LengthCheck {
    const characters = new TextCounter(text).countCharacters()

    return {
      characters,
      status: this.getStatus(characters),
    }
  }

  /**
   * Get status based on min/max character length.
   *
   * @param characters - Numbers of characters
   * @returns
   */
  private getStatus(characters: number): LengthStatus {
    if (characters < this.textKind.minCharacters) {
      return '⚠️ too-short'
    }
    if (characters > this.textKind.maxCharacters) {
      return '⚠️ too-long'
    }
    return '👍 ok'
  }
}
