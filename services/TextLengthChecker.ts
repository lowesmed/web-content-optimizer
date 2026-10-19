import { TextCounter } from "glyphalyze";

export type LengthStatus = "ok" | "too-short" | "too-long"

export class TextLengthChecker {
  constructor() {}

  check(text: string): number {
    const characters = new TextCounter(text).countCharacters();

    return characters;
  }
  //   if (characters > 30 ) {
  //     return "too-long";
  //   }
  //   return "ok"
  // }
}