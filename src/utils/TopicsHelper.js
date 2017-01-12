import footballIcon from '../res/images/targets/target-football.png';
import travelIcon from '../res/images/targets/target-travel.png';
import politicsIcon from '../res/images/targets/target-politics.png';
import artIcon from '../res/images/targets/target-art.png';
import datingIcon from '../res/images/targets/target-dating.png';
import musicIcon from '../res/images/targets/target-music.png';
import moviesIcon from '../res/images/targets/target-movies.png';
import seriesIcon from '../res/images/targets/target-series.png';
import foodIcon from '../res/images/targets/target-food.png';

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
      return undefined;
  }
}

export const getTopicIcon = (id) => {
  // TODO: JG: Replace integers for the real topic id
  switch (id) {
    case 2:
      return footballIcon;
    case 3:
      return travelIcon;
    case 4:
      return politicsIcon;
    case 5:
      return artIcon;
    case 6:
      return datingIcon;
    case 7:
      return musicIcon;
    case 8:
      return moviesIcon;
    case 9:
      return seriesIcon;
    case 10:
      return foodIcon;
    default:
      return '';
  }
}
