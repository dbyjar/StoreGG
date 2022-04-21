import Image from 'next/image';
import cx from 'classnames';

interface TableRowProps {
  image: string;
  title: string;
  category: string;
  value: number;
  nominal: number;
  status: 'Success' | 'Failed' | 'Pending';
}

export default function TableRow(props: TableRowProps) {
  const {
    image, title, category, value, nominal, status,
  } = props;

  const statusClass = cx({
    'float-start icon-status': true,
    success: status === 'Success',
    failed: status === 'Failed',
    pending: status === 'Pending',
  });

  return (
    <tr className="align-middle text-center">
      <th scope="row">
        <div className="float-start me-3 mb-lg-0 mb-3">
          <Image src={`/img/${image}.png`} width={80} height={60} alt="" />
        </div>
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          {value}
          {' '}
          Gold
        </p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{nominal}</p>
      </td>
      <td>
        <div>
          <span className={statusClass} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">{status}</p>
        </div>
      </td>
    </tr>
  )
}
