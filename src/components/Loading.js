import React from 'react';
import { RingLoader, BounceLoader } from 'react-spinners';

function Loading() {
  return (
    <div>
      <BounceLoader color="#33ccff" loading />
      <RingLoader color="#1C4166" loading />
    </div>
  );
}

export default Loading;