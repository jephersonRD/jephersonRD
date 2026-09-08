interface TechBadgeProps {
  name: string
  color?: string
}

export function TechBadge({ name, color }: TechBadgeProps) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-[12px] bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.06] transition-all duration-300">
      {color && (
        <div
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: color }}
        />
      )}
      <span className="text-white/50 text-xs font-medium">{name}</span>
    </div>
  )
}
