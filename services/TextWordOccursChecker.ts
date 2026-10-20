import { TextKind } from "@/domain/TextKindCatalog";
import { TextCounter } from "glyphalyze";

export type OccursStatus = "occur" | "dont-occur" | "recurs"

export interface WordOccursCheck {
  wordOccurs: boolean
  numberOfTimes: number
  status: OccursStatus
}

export class TextWordOccursChecker {

  constructor(private readonly textKind: TextKind) {}

  check(text: string, pageName: string): WordOccursCheck {
    const wordsInText = new TextCounter(text).wordFrequency();

    const wordToCheckFor = pageName.toLowerCase();

    const numberOfTimes = wordsInText[wordToCheckFor] ?? 0;
    const wordOccurs = numberOfTimes > 0;
    
    return {
      wordOccurs,
      numberOfTimes,
      status: this.getStatus(numberOfTimes)
    };
  }

  /**
   * Get status based on min/max character length.
   * 
   * @param characters - Numbers of characters
   * @returns 
   */
  private getStatus(numberOfTimes: number): OccursStatus {
    if(numberOfTimes < 1) {
      return "dont-occur";
    }
    if(numberOfTimes > 1) {
      return "recurs";
    }
    return "occur"
  }
}