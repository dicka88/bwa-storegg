import React from 'react';
import OverviewContent from '../../components/organisms/OverviewContent';
import Sidebar from '../../components/organisms/Sidebar';

export default function MemberOverview() {
  return (
    <section className="overview overflow-auto">
      <Sidebar />
      <OverviewContent />
    </section>
  );
}
