interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center sm:text-left">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-inter">
        {value}
      </div>
      <div className="text-[10px] sm:text-xs text-white/40 tracking-widest uppercase mt-1">
        {label}
      </div>
    </div>
  )
}
