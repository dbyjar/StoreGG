interface detailRowProps {
  label: string;
  value: string|number;
  className?: string;
}

export default function DetailRow(props: Partial<detailRowProps>) {
  const { label, value, className } = props

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className={`purchase-details ${className}`}>{value}</span>
    </p>
  )
}
