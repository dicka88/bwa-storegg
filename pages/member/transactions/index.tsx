import React from 'react';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionContent from '../../../components/organisms/TransactionContent';
import { getUserCookieNode } from '../../../helpers/session';
import { UserTypes } from '../../../services/dataTypes';

export default function MemberTransactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar />
      <TransactionContent />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    url: string;
    cookies: {
      token: string
    }
  }
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;

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
        destination: `/signin?redirect=${req.url}`,
        permanent: false,
      },
    };
  }
}
