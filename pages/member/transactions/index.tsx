import Sidebar from '../../../components/organisms/sidebar';
import TransactionContent from '../../../components/organisms/transactionContent';

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionContent />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      uglyTokenGG: string
    }
  }
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const isLogin = req.cookies.uglyTokenGG

  if (!isLogin) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    }
  }

  return {
    props: {
      token: true,
    },
  }
}
