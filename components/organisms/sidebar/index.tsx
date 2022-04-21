import Footer from './footer'
import MenuItem from './menuItem'
import Profile from './profile'

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="overview" active />
          <MenuItem title="Transactions" icon="transactions" />
          <MenuItem title="Messages" icon="messages" />
          <MenuItem title="Card" icon="card" />
          <MenuItem title="Rewards" icon="rewards" />
          <MenuItem title="Settings" icon="settings" />
          <MenuItem title="Log Out" icon="logout" />
        </div>
        <Footer />
      </div>
    </section>
  )
}
