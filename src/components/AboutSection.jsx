import { BarChart2, Eye, Cpu, Heart } from 'lucide-react'

const SPECIALISMS = [
  'Web Design',
  'Development',
  'Technical SEO',
  'Data Analytics',
  'Conversion Tracking',
  'Live Events Tech',
]

const VALUES = [
  {
    title: 'Data-Driven',
    icon: BarChart2,
    description: 'Evidence guides every decision we make',
  },
  {
    title: 'Transparent',
    icon: Eye,
    description: 'Open by default — in process and in results',
  },
  {
    title: 'Technologically Literate',
    icon: Cpu,
    description: 'We deeply understand the tools we recommend',
  },
  {
    title: 'Human-Centred',
    icon: Heart,
    description: 'Technology that works for people, not systems',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-12 pb-24">
      <h2 className="text-brand-text font-bold text-2xl mb-8">About Farlo</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left — Company overview */}
        <div>
          <p className="text-brand-text leading-relaxed mb-2">
            Farlo is a London-based digital transformation agency helping
            businesses grow through thoughtful design, cutting-edge development,
            and data-led strategy. We build digital products and experiences
            that deliver measurable results for ambitious brands.
          </p>
          <p className="text-brand-muted text-sm leading-relaxed mb-6">
            Based in Fitzrovia, London. Growing team across design, development
            and strategy.
          </p>

          <div className="flex flex-wrap gap-2">
            {SPECIALISMS.map(s => (
              <span
                key={s}
                className="px-3 py-1 text-xs font-medium border border-brand-border text-brand-muted rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Core values 2×2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {VALUES.map(({ title, icon: Icon, description }) => (
            <div
              key={title}
              className="bg-brand-surface/10 border border-brand-border rounded-xl p-4"
            >
              <Icon size={20} className="text-brand-accent mb-3" aria-hidden="true" />
              <h3 className="text-brand-text font-semibold text-sm mb-1 leading-tight">
                {title}
              </h3>
              <p className="text-brand-muted text-xs leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
