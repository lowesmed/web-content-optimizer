"use client"

export default function MetaTitleField() {

  return (
    <div className="flex flex-col gap-3">
      <h3>Meta title</h3>
      <input
        type="text"
        name="metaTitleText"
        id="metaTitleText"
        placeholder="Enter suggested text"
        autoComplete="off"
        className="py-2 px-4 rounded-full border border-solid  transition-colors hover:b"
      />
      <p className="text-sm">Word counter here</p>
    </div>
  );
}