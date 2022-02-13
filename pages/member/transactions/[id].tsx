import React from 'react';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';
import { getUserCookieNode } from '../../../helpers/session';
import { UserTypes } from '../../../services/dataTypes';

export default function MemberTransactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar />
      <TransactionDetailContent />
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
