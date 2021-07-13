import _ from 'lodash';
_.mul = function (array: number[]): number {
  return array.reduce((soma, valor) => soma * valor, 1);
};
global.MINHAGLOBAL = 'WOW';
export default _;
