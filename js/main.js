'use strict';

function getOneArgument(oneArgument){
  if (typeof oneArgument !== 'string' ) return 'Получена не строка';

  oneArgument = oneArgument.trim();

  if (oneArgument.length > 30) oneArgument = oneArgument.replace(oneArgument.substring(30), '...');

  return oneArgument;
};

console.log(getOneArgument(prompt('Введите строку')));