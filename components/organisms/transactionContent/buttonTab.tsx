import cx from 'classnames'

interface buttonTabProps {
  title: string;
  active?: boolean;
}
export default function ButtonTab(props: Partial<buttonTabProps>) {
  const { title, active } = props
  
  const activeClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  })

  return (
    <a data-filter="*" href="/#" className={activeClass}>{title}</a>
  )
}
