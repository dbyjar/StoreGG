import cx from 'classnames'

interface buttonTabProps {
  title: string;
  active?: boolean;
  onClick: () => void
}
export default function ButtonTab(props: Partial<buttonTabProps>) {
  const { title, active, onClick } = props
  
  const activeClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  })

  return (
    <button type="button" onClick={onClick} className={activeClass}>{title}</button>
  )
}
