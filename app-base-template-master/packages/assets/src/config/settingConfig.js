export const positions = [
  {position: '_topRight'},
  {position: '_topLeft'},
  {position: '_bottomLeft'},
  {position: '_bottomRight'}
];

export const checkbox = [
  {checked: true, key: 'hideTime', label: 'Hide time ago'},
  {checked: true, key: 'truncate', label: 'Truncate content text'}
];

export const timing = [
  {
    range: 5,
    key: 'displayDuration',
    label: 'Display Duration',
    helperText: 'How long each pop will display on your page.'
  },
  {
    range: 10,
    key: 'timeBefore',
    label: 'Time before the first pop',
    helperText: 'The delay time before the first notification.'
  },
  {
    range: 2,
    key: 'gapTime',
    label: 'Gap time between two pops',
    helperText: 'The time interval between two popup notifications'
  },
  {
    range: 20,
    key: 'maximum',
    label: 'Maximum of popups',
    helperText:
      'The maximum number of popups are allowed to show after page loading. Maximum number is 80.'
  }
];

export const pageRestriction = [{value: 'allPage', exPage: ''}, {value: '_topLeft'}];
