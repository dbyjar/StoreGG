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
