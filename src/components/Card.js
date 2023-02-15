import React, { useState } from 'react';
import styles from '@/styles/Card.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Card = ({ data }) => {
  const router = useRouter();
  const [srcImg, setSrcImg] = useState(data.backSprite);
  return (
    <div
      className={styles.container}
      onClick={() => router.push(`/detail/${data.key}`)}
    >
      {/* <Image src={data.backSprite} width={20} height={20} /> */}
      <Image
        src={srcImg}
        width={100}
        height={100}
        alt='pokemon image'
        onError={() => {
          console.log('run');
          setSrcImg('/images.png');
        }}
      />
      <h5>{data.key}</h5>
    </div>
  );
};

export default Card;
