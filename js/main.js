'use strict';

function getOneArgument(oneArgument){
  if (typeof oneArgument !== 'string' ) return 'Получена не строка';

  let i = 0;

  while (oneArgument[i] === ' ') {
    i++;
  };

  oneArgument = oneArgument.substring(i);

  i = oneArgument.length-1;

  while (oneArgument[i] === ' ') {
    i--;
  };

  oneArgument = oneArgument.substring(0, i + 1);

  if (oneArgument.length > 30) oneArgument = oneArgument.replace(oneArgument.substring(30), '...');

  return oneArgument;
};