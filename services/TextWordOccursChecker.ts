import { TextCounter } from 'glyphalyze'

export type OccursStatus = 'occur' | 'dont-occur' | 'recurs'

export interface WordOccursCheck {
  status: OccursStatus
}

const REQUIRED_OCCURRENCES = 1

export class TextWordOccursChecker {
  check(text: string, pageName: string): WordOccursCheck {
    const wordsInText = new TextCounter(text).wordFrequency()
    const wordToCheckFor = pageName.toLowerCase()
    const numberOfTimes = wordsInText[wordToCheckFor] ?? 0

    return {
      status: this.getStatus(numberOfTimes),
    }
  }

  private getStatus(numberOfTimes: number): OccursStatus {
    if (numberOfTimes < REQUIRED_OCCURRENCES) {
      return 'dont-occur'
    }
    if (numberOfTimes > REQUIRED_OCCURRENCES) {
      return 'recurs'
    }
    return 'occur'
  }
}
