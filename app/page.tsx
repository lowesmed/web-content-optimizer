import ImageSelectionForm from '@/components/image-selection-form'
import TextCheckerField from '@/components/text-checker-field'
import { TextKindCatalog } from '@/domain/TextKindCatalog'
import Image from 'next/image'

export default function Home() {
  const textKindCatalog = new TextKindCatalog()

  return (
    <div className="flex flex-col gap-6">
      <Image 
        src="/web-content-optimizer-logo.jpg"
        width={200}
        height={400}
        alt="Web Content Optimizer logo"
      />

      <h1 className="text-3xl font-bold">Web Content Optimizer</h1>
      <p>This app helps you optimize images and text for different web usage. You can:</p>
      <ul>
        <li>• Make an image smaller in file size and dimensions</li>
        <li>• Create SEO optimized meta titles for webpages</li>
      </ul>
      <h2 className="text-2xl font-bold">Images</h2>
      <p>Using large images on your site eats up storage on your server, takes longer to load and will make your site rank lower in search engines. Use this tool to create better optimized images for the web.</p>
      <ImageSelectionForm />
      <hr className='m-6 text-gray-400' />
      <h2 className="text-2xl font-bold">Text</h2>
      <p>Lets optimize some texts that are very important to your site. These texts are used by search engines and AI to understand your page and make it rank higher in search results.</p>
      <TextCheckerField textKind={textKindCatalog.find('meta-title')} />
      <TextCheckerField textKind={textKindCatalog.find('meta-description')} />
      <TextCheckerField textKind={textKindCatalog.find('h1-heading')} />
    </div>
  )
}
