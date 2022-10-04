/* eslint-disable react/jsx-one-expression-per-line */
import Sidebar from '../../components/organisms/sidebar';
import OverviewContent from '../../components/organisms/OverviewContent';

export default function Member() {
  return (
    <section className="overview overflow-auto">
        <Sidebar activeMenu="overview" />
        <OverviewContent />
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
