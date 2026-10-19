"use client"
import { TextLengthChecker } from "@/services/TextLengthChecker";
import { useMemo, useState } from "react";

export default function MetaTitleField() {
  const [text, setText] = useState("");
  const maxCharacters = 60;

  const lengthCheck = useMemo(() => new TextLengthChecker().check(text), [text])

  return (
    <div className="flex flex-col gap-3">
      <h3>Meta title</h3>
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
        {lengthCheck.characters} / {maxCharacters} characters
        {lengthCheck.characters > maxCharacters && " " + lengthCheck.status}
      </p>
    </div>
  );
}