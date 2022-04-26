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
