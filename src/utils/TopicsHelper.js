export const getTopicId = (name) => {
  switch (name) {
    case 'Football':
      return 2;
    case 'Travel':
      return 3;
    case 'Politics':
      return 4;
    case 'Art':
      return 5;
    case 'Dating':
      return 6;
    case 'Music':
      return 7;
    case 'Movies':
      return 8;
    case 'Series':
      return 9;
    case 'Food':
      return 10;
    default:
      return 0;
  }
}

export const getTopicName = (id) => {
  switch (id) {
    case 2:
      return 'Football';
    case 3:
      return 'Travel';
    case 4:
      return 'Politics';
    case 5:
      return 'Art';
    case 6:
      return 'Dating';
    case 7:
      return 'Music';
    case 8:
      return 'Movies';
    case 9:
      return 'Series';
    case 10:
      return 'Food';
    default:
      return '';
  }
}

export const getTopicIcon = (id) => {
  // TODO: JG: Replace integers for the real topic id
  switch (id) {
    case 2:
      return 'target-football.png';
    case 3:
      return 'target-travel.png';
    case 4:
      return 'target-politics.png';
    case 5:
      return 'target-art.png';
    case 6:
      return 'target-dating.png';
    case 7:
      return 'target-music.png';
    case 8:
      return 'target-movies.png';
    case 9:
      return 'target-series.png';
    case 10:
      return 'target-food.png';
    default:
      return '';
  }
}
