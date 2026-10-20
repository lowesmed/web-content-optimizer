import ImageSelectionForm from "@/components/image-selection-form";
import TextCheckerField from "@/components/text-checker-field";
import { TextKindCatalog } from "@/domain/TextKindCatalog";

export default function Home() {

  const textKindCatalog = new TextKindCatalog()

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Web Content Optimizer</h1>
      <p>This app helps you create optimized images and text for different web usage. You can:</p>
        <ul>
          <li>• Make images smaller in file size and dimension</li>
          <li>• Create SEO optimized meta titles for webpages</li>
        </ul>
      <p className="text-sm">More features are being added frequently.</p>
      <h2 className="text-2xl font-bold">Images</h2>
      <ImageSelectionForm />
      <h2 className="text-2xl font-bold">Text</h2>
      <TextCheckerField textKind={textKindCatalog.find("meta-title")}/>
      <TextCheckerField textKind={textKindCatalog.find("meta-description")}/>
      <TextCheckerField textKind={textKindCatalog.find("h1-heading")}/>
    </div>
  );
}
