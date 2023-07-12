

export const selectStatusColor = (status) => {
    switch (status) {
        case 'Alive':
          return '#16FF00';
        case 'Dead':
          return '#B70404';
        default:
          return '#00C4FF';
      }
  };

  export const selectGenderSymbol = (gender) => {
    switch (gender) {
        case 'Male':
          return '♂';
        case 'Female':
          return '♀';
        case 'Genderless':
          return '⚤';
        default:
          return '?';
      }
  };