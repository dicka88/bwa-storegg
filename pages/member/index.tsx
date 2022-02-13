import React from 'react';
import OverviewContent from '../../components/organisms/OverviewContent';
import Sidebar from '../../components/organisms/Sidebar';
import { getUserCookieNode } from '../../helpers/session';
import { UserTypes } from '../../services/dataTypes';

export default function MemberOverview() {
  return (
    <section className="overview overflow-auto">
      <Sidebar />
      <OverviewContent />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string
    }
  }
}

export async function getServerSideProps(ctx: GetServerSideProps) {
  const { token } = ctx.req.cookies;

  try {
    const payload: UserTypes = getUserCookieNode(token);

    return {
      props: {
        user: payload,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }
}
