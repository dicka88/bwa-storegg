import Link from 'next/link';
import React from 'react';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionContent from '../../../components/organisms/TransactionContent';

export default function MemberTransactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar />
      <TransactionContent />
    </section>
  );
}
