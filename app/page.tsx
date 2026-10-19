import ImageSelectionForm from "@/components/image-selection-form";
import MetaTitleField from "@/components/meta-title-field";

export default function Home() {
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
      <MetaTitleField />
    </div>
  );
}
