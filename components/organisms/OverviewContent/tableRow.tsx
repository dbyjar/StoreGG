import Image from 'next/image';
import cx from 'classnames';

import baseURL from '../../../services/index'

interface TableRowProps {
  image: string;
  title: string;
  category: string;
  value: string;
  nominal: number;
  status: 'success' | 'failed' | 'pending';
}

export default function TableRow(props: TableRowProps) {
  const {
    image, title, category, value, nominal, status,
  } = props;

  const formatNumber = nominal.toLocaleString('id-ID')

  const statusClass = cx({
    'float-start icon-status': true,
    success: status === 'success',
    failed: status === 'failed',
    pending: status === 'pending',
  });

  return (
    <tr className="align-middle text-center">
      <th scope="row">
        <div className="float-start me-3 mb-lg-0 mb-3">
          <Image
            src={`${baseURL}/uploads/${image}`}
            width={80}
            height={60}
            alt=""
          />
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
        <p className="fw-medium text-start color-palette-1 m-0">{formatNumber}</p>
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
