import {
  FileText,
  Download,
  Key,
  BookOpen,
  Layers,
  Image,
  MessageSquare,
} from 'lucide-react'
import QuickLinkCard, { FigmaIcon } from './QuickLinkCard'
import { links } from '../config/links'

const TOOLKIT = [
  {
    label: 'Figma Library',
    icon: FigmaIcon,
    description: 'Browse our component library',
    url: links.figmaLibrary,
  },
  {
    label: 'Brand Guidelines',
    icon: FileText,
    description: 'Colours, type, usage rules',
    url: links.brandGuidelines,
  },
  {
    label: 'Logo Downloads',
    icon: Download,
    description: 'All formats and variants',
    url: links.logoDownloads,
  },
  {
    label: 'Software Licences',
    icon: Key,
    description: "Tools we're licensed for",
    url: links.licences,
  },
  {
    label: 'Onboarding Guide',
    icon: BookOpen,
    description: "Start here if you're new",
    url: links.onboarding,
  },
  {
    label: 'Design System',
    icon: Layers,
    description: 'Tokens, patterns, principles',
    url: links.designSystem,
  },
  {
    label: 'Asset Library',
    icon: Image,
    description: 'Photography, icons, graphics',
    url: links.assets,
  },
  {
    label: 'Slack — Design',
    icon: MessageSquare,
    description: 'Jump into #design',
    url: links.slack,
  },
]

export default function QuickLinks() {
  return (
    <section id="toolkit" className="py-12">
      <h2 className="text-brand-text font-bold text-2xl mb-6">Your Toolkit</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {TOOLKIT.map(item => (
          <QuickLinkCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  )
}
