import Image from 'next/image';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';

import CheckoutItem from '../components/organisms/checkoutItem';
import CheckoutDetail from '../components/organisms/checkoutDetail';
import CheckoutConfirmation from '../components/organisms/checkoutConfirmation';

export default function Checkout(props: any) {
  const { player } = props
  const [auth, setAuth] = useState({})

  useEffect(() => {
    setAuth(player)
  }, [])

  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
            <div className="logo text-md-center text-start pb-50">
                <a className="" href="/#">
                    <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
                </a>
            </div>
            <div className="title-text pt-md-50 pt-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
                <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
            </div>
            <CheckoutItem />
            <hr />
            <CheckoutDetail user={auth} />
            <CheckoutConfirmation />
        </div>
    </section>
  );
}

export async function getServerSideProps({ req }: any) {
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
  const user: any = jwtDecode(token)
  const dataPlayer = user.player

  return {
    props: {
      player: dataPlayer,
    },
  }
}
