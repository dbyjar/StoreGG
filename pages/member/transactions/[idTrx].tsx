import { useEffect, useState } from 'react'
/* eslint-disable react/jsx-one-expression-per-line */
import Sidebar from '../../../components/organisms/sidebar';
import TransactionsDetailContent from '../../../components/organisms/transactionDetailContent';
import { getTransactionDetail } from '../../../services/service/player';

interface GetServerSidePropsTypes {
  req: {
    cookies: {
      uglyTokenGG: string
    }
  }
  params: {
    idTrx: string
  }
}

export default function TransactionsDetail(props: any) {
  const { data } = props
  const [detail, setDetail] = useState({})

  useEffect(() => {
    setDetail(data.data)
  }, [data])

  return (
    <section className="transactions-detail overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionsDetailContent detail={detail} />
    </section>
  );
}

export async function getServerSideProps({ req, params }: GetServerSidePropsTypes) {
  const { idTrx } = params
  const isLogin = req.cookies.uglyTokenGG
  
  if (!isLogin) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    }
  }

  const token = Buffer.from(isLogin, 'base64').toString('ascii')
  const response = await getTransactionDetail(idTrx, token)

  return {
    props: {
      data: response,
    },
  }
}
