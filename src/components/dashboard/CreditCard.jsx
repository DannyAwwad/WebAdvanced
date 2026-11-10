
function CreditCard({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="bg-surface border border-white/5 rounded-xl p-5">

      <div className="flex justify-between items-center">
        <p className="text-sm text-muted">
          {title}
        </p>

        {Icon && <Icon size={20} className="text-accent" />}
      </div>

      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>

      {subtitle && (
        <p className="text-xs text-muted mt-1">
          {subtitle}
        </p>
      )}

    </div>
  )
}

export default CreditCard
