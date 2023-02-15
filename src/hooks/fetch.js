import { useLazyQuery, gql } from '@apollo/client';

const GET_POKEMON_DETAILS = gql`
  query GetPokemon($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      key
      backSprite
      baseForme
      baseSpecies
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      baseStatsTotal
      bulbapediaPage
      catchRate {
        base
        percentageWithOrdinaryPokeballAtFullHealth
      }
      color
      cosmeticFormes
      eggGroups
      evolutionLevel
      evolutions {
        key
        backSprite
        baseForme
        baseSpecies
        baseStatsTotal
        bulbapediaPage
        color
        cosmeticFormes
        eggGroups
        evolutionLevel
        forme
        formeLetter
        height
        isEggObtainable
        levellingRate
        maximumHatchTime
        minimumHatchTime
        num
        otherFormes
        serebiiPage
        shinyBackSprite
        shinySprite
        smogonPage
        smogonTier
        species
        sprite
        weight
      }
      evYields {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      flavorTexts {
        flavor
        game
      }
      forme
      formeLetter
      gender {
        female
        male
      }
      height
      isEggObtainable
      levellingRate
      maximumHatchTime
      minimumHatchTime
      num
      otherFormes
      preevolutions {
        key
        backSprite
        baseForme
        baseSpecies
        baseStatsTotal
        bulbapediaPage
        color
        cosmeticFormes
        eggGroups
        evolutionLevel
        forme
        formeLetter
        height
        isEggObtainable
        levellingRate
        maximumHatchTime
        minimumHatchTime
        num
        otherFormes
        serebiiPage
        shinyBackSprite
        shinySprite
        smogonPage
        smogonTier
        species
        sprite
        weight
      }
      serebiiPage
      shinyBackSprite
      shinySprite
      smogonPage
      smogonTier
      species
      sprite
      types {
        name
      }
      weight
    }
  }
`;

const GET_ALL_POKEMON = gql`
  query GetAllPokemon($take: Int) {
    getAllPokemon(take: $take) {
      key
      backSprite
      baseForme
      baseSpecies
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      baseStatsTotal
      bulbapediaPage
      catchRate {
        base
        percentageWithOrdinaryPokeballAtFullHealth
      }
      color
      cosmeticFormes
      eggGroups
      evolutionLevel
      evolutions {
        key
        backSprite
        baseForme
        baseSpecies
        baseStatsTotal
        bulbapediaPage
        color
        cosmeticFormes
        eggGroups
        evolutionLevel
        forme
        formeLetter
        height
        isEggObtainable
        levellingRate
        maximumHatchTime
        minimumHatchTime
        num
        otherFormes
        serebiiPage
        shinyBackSprite
        shinySprite
        smogonPage
        smogonTier
        species
        sprite
        weight
      }
      evYields {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      flavorTexts {
        flavor
        game
      }
      forme
      formeLetter
      gender {
        female
        male
      }
      height
      isEggObtainable
      levellingRate
      maximumHatchTime
      minimumHatchTime
      num
      otherFormes
      preevolutions {
        key
        backSprite
        baseForme
        baseSpecies
        baseStatsTotal
        bulbapediaPage
        color
        cosmeticFormes
        eggGroups
        evolutionLevel
        forme
        formeLetter
        height
        isEggObtainable
        levellingRate
        maximumHatchTime
        minimumHatchTime
        num
        otherFormes
        serebiiPage
        shinyBackSprite
        shinySprite
        smogonPage
        smogonTier
        species
        sprite
        weight
      }
      serebiiPage
      shinyBackSprite
      shinySprite
      smogonPage
      smogonTier
      species
      sprite
      types {
        name
      }
      weight
    }
  }
`;

export const FetchPokemon = () => {
  const [fetchPokemon, { loading, error, data }] = useLazyQuery(
    GET_POKEMON_DETAILS,
    {
      notifyOnNetworkStatusChange: true,
      errorPolicy: 'all',
      fetchPolicy: 'cache-and-network',
    }
  );

  // useErrorMessage(error);

  return {
    fetchPokemon,
    loading,
    data,
    error,
  };
};

export const FetchAllPokemon = () => {
  const [fetchAllPokemon, { loading, error, data }] = useLazyQuery(
    GET_ALL_POKEMON,
    {
      notifyOnNetworkStatusChange: true,
      errorPolicy: 'all',
      fetchPolicy: 'cache-and-network',
    }
  );

  // useErrorMessage(error);

  return {
    fetchAllPokemon,
    loading,
    data,
    error,
  };
};
