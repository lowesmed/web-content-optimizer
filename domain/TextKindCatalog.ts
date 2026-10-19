export interface TextKind {
  readonly id: string
  readonly label: string
  readonly minCharacters: number
  readonly maxCharacters: number
}

export class TextKindCatalog {
  private readonly kinds: TextKind[] = [
    {
      id: "meta-title",
      label: "Meta title",
      minCharacters: 30,
      maxCharacters: 80
    },
    {
      id: "meta-description",
      label: "Meta description",
      minCharacters: 60,
      maxCharacters: 120
    }
  ]

  find(id: string): TextKind {
    const kind = this.kinds.find((candidate) => candidate.id === id)
    if (!kind) {
      throw new Error(`Unknown kind: ${id}`)
    }
  
    return kind
  }
}