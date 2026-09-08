import { ArrowUpRight } from 'lucide-react'

interface SocialCardProps {
  icon: React.ReactNode
  platform: string
  username: string
  url: string
  stat?: string
}

export function SocialCard({ icon, platform, username, url, stat }: SocialCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center gap-6 rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-10 sm:p-12 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-[0_0_50px_rgba(255,255,255,0.02)] hover:-translate-y-1"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/[0.06] text-white/45 group-hover:text-white/65 group-hover:bg-white/[0.08] transition-all duration-300">
        {icon}
      </div>
      <div className="text-center">
        <h3 className="text-white font-semibold text-base mb-2">{platform}</h3>
        <p className="text-white/30 text-sm">{username}</p>
        {stat && (
          <p className="text-white/18 text-[11px] mt-3">{stat}</p>
        )}
      </div>
      <ArrowUpRight className="w-4 h-4 text-white/12 group-hover:text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}
