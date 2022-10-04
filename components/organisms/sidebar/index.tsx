import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import Footer from './footer'
import MenuItem from './menuItem'
import Profile from './profile'

interface sidebarProps {
  activeMenu: string;
}

export default function Sidebar(props: sidebarProps) {
  const { activeMenu } = props

  const router = useRouter()
  const onLogout = () => {
    Cookies.remove('uglyTokenGG')

    router.push('/')
  }
  
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="overview" href="/member" active={activeMenu === 'overview'} />
          <MenuItem title="Transactions" icon="transactions" href="/member/transactions" active={activeMenu === 'transactions'} />
          <MenuItem title="Messages" icon="messages" />
          <MenuItem title="Card" icon="card" />
          <MenuItem title="Rewards" icon="rewards" />
          <MenuItem title="Settings" icon="settings" href="/member/edit-profile" active={activeMenu === 'editProfile'} />
          <MenuItem title="Log Out" icon="logout" onClick={onLogout} />
        </div>
        <Footer />
      </div>
    </section>
  )
}
