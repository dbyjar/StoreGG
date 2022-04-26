/* eslint-disable react/jsx-one-expression-per-line */
import Sidebar from '../../../components/organisms/sidebar';
import TransactionsDetailContent from '../../../components/organisms/transactionDetailContent';

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionsDetailContent />
    </section>
  );
}
