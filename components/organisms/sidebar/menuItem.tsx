import Link from 'next/link'
import Image from 'next/image';
import cx from 'classnames'

interface menuItemProps {
  active?: boolean;
  icon: string;
  title: string;
  href?: string;
}

export default function MenuItem(props: Partial<menuItemProps>) {
  const {
    active, icon, title, href = '/',
  } = props
  const classMenu = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classMenu}>
      <div className="me-3">
        <Image src={`/icon/icon-${icon}.svg`} width={25} height={25} alt={title} />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  )
}
