'use client'
import { TextLengthChecker } from '@/services/TextLengthChecker'
import { TextKind } from '@/domain/TextKindCatalog'
import { useMemo, useState } from 'react'
import { TextWordOccursChecker } from '@/services/TextWordOccursChecker'

interface MetaTitleFieldProps {
  textKind: TextKind
}

export default function TextCheckerField({ textKind }: MetaTitleFieldProps) {
  const [text, setText] = useState('')
  const [pageName, setPageName] = useState('')

  const lengthChecker = useMemo(() => new TextLengthChecker(textKind), [textKind])
  const wordOccursChecker = useMemo(() => new TextWordOccursChecker(textKind), [textKind])
  
  const lengthCheck = lengthChecker.check(text)
  const wordOccursCheck = wordOccursChecker.check(text, pageName)

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold">{textKind.label || 'Text to optimize'}</h3>
      <p>{textKind.description}</p>
      {textKind.timesWordOccurs !== undefined && (
        <div>
          <input
            type="text"
            name="pageName"
            id="pageName"
            value={pageName}
            onChange={(event) => setPageName(event.target.value)}
            placeholder="Enter the name of page. Eg: /about"
            autoComplete="off"
            className="py-2 px-4 rounded-full border border-solid  transition-colors"
          />
          <p className="text-sm">{wordOccursCheck.status}</p>
        </div>
      )}
      <input
        type="text"
        name="metaTitleText"
        id="metaTitleText"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter suggested text"
        autoComplete="off"
        className="py-2 px-4 rounded-full border border-solid  transition-colors"
      />
      <p className="text-sm">
        {lengthCheck.characters} / {textKind.maxCharacters} characters {' | ' + lengthCheck.status}
      </p>
    </div>
  )
}
