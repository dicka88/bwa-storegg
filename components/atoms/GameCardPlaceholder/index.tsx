import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function GameCardPlaceholder() {
  return (
    <div>
      <Skeleton style={{ borderRadius: '1.625rem' }} height={250} width={200} />
    </div>
  );
}
