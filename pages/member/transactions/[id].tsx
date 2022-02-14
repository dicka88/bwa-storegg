import React from 'react';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';
import { getUserCookieNode } from '../../../helpers/session';
import { UserTypes } from '../../../services/dataTypes';
import { getTransactionDetail } from '../../../services/member';

export default function MemberTransactionDetail({ transaction }) {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar />
      <TransactionDetailContent transaction={transaction} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string
    }
  }
  params: {
    id: string
  }
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { token } = req.cookies;

  try {
    const payload: UserTypes = getUserCookieNode(token);
    const transaction = await getTransactionDetail(token, params.id);

    console.log(transaction);

    return {
      props: {
        user: payload,
        transaction,
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
