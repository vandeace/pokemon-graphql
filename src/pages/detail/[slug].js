import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Detail.module.css';
import { FetchPokemon } from '@/hooks/fetch';
import Image from 'next/image';

const DetailPokemon = () => {
  const router = useRouter();

  const { data, error, fetchPokemon, loading } = FetchPokemon();
  const [pokemon, setPokemon] = useState(null);
  const [srcImg, setSrcImg] = useState(null);

  useMemo(() => {
    const { slug } = router.query;
    fetchPokemon({ variables: { pokemon: slug } });
    if (data?.getPokemon) {
      setPokemon(data?.getPokemon);
    }
    if (pokemon && pokemon?.backSprite) {
      setSrcImg(pokemon?.backSprite);
    } else {
      setSrcImg('/images.png');
    }
  }, [router, fetchPokemon, setPokemon, data, pokemon]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className={styles.container}>
      <h1>Detail Pokemon</h1>
      {pokemon ? (
        <div className={styles.card}>
          <Image src={srcImg} width={200} height={200} alt='pokemon image' />
          <h5 className={styles.name}>{pokemon.key}</h5>
          <h4 className={styles.attributes}>Attribute</h4>
          <h5 className={styles.label}>Attack : {pokemon.baseStats.attack}</h5>
          <h5 className={styles.label}>
            Defense : {pokemon.baseStats.defense}
          </h5>
          <h5 className={styles.label}>HP : {pokemon.baseStats.hp}</h5>
          <h5 className={styles.label}>
            Special Attack : {pokemon.baseStats.specialattack}
          </h5>
          <h5 className={styles.label}>
            Special Defense : {pokemon.baseStats.specialdefense}
          </h5>
          <h5 className={styles.label}>Speed : {pokemon.baseStats.speed}</h5>
        </div>
      ) : null}
    </div>
  );
};

export default DetailPokemon;
