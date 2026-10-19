"use client"
import { TextLengthChecker } from "@/services/TextLengthChecker";
import { TextKind } from "@/domain/TextKindCatalog";
import { useMemo, useState } from "react";

interface MetaTitleFieldProps {
  textKind: TextKind;
}

export default function TextCheckerField({ textKind }: MetaTitleFieldProps) {
  const [text, setText] = useState("");

  const lengthCheck = useMemo(() => new TextLengthChecker(textKind).check(text), [textKind, text])

  return (
    <div className="flex flex-col gap-3">
      <h3>{textKind.label || "Text to optimize"}</h3>
      <input
        type="text"
        name="metaTitleText"
        id="metaTitleText"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter suggested text"
        autoComplete="off"
        className="py-2 px-4 rounded-full border border-solid  transition-colors hover:b"
      />
      <p className="text-sm">
        {lengthCheck.characters} / {textKind.maxCharacters} characters { " | " + lengthCheck.status}
      </p>
    </div>
  );
}