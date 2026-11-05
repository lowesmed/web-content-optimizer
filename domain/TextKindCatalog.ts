export interface TextKind {
  readonly id: string
  readonly label: string
  readonly description: string
  readonly minCharacters: number
  readonly maxCharacters: number
  readonly mustContainPageTitle?: boolean
}

export class TextKindCatalog {
  private readonly kinds: TextKind[] = [
    {
      id: 'meta-title',
      label: 'Meta title',
      description: 'A short text including a few key words about the contents of the page.',
      minCharacters: 30,
      maxCharacters: 80,
    },
    {
      id: 'meta-description',
      label: 'Meta description',
      description: 'A slightly longer text summarizing the full page content.',
      minCharacters: 60,
      maxCharacters: 120,
    },
    {
      id: 'h1-heading',
      label: 'H1 heading',
      description:
        'A short text used as a heading on top of your page. It describes what the page is about and it needs to include the title of the page.',
      minCharacters: 12,
      maxCharacters: 40,
      mustContainPageTitle: true,
    },
  ]

  find(id: string): TextKind {
    const kind = this.kinds.find((candidate) => candidate.id === id)
    if (!kind) {
      throw new Error(`Unknown kind: ${id}`)
    }

    return kind
  }
}
