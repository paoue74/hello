import * as _ from 'lodash';

export const data: string[] = [
  'The weather is bad today',
  'Recompose can make you life easier :)',
  'Let\'s make tests clearly and readable',
]

export const getRandomString = (): string => {
  return data[_.random(0, 2)];
}