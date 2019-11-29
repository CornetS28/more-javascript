const getPuzzle = callback => {
  const request = new XMLHttpRequest ();

  request.addEventListener ('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      data = JSON.parse (e.target.responseText);
      callback(undefined, data);
    } else if (e.target.readyState === 4) {
      callback('There was an error', undefined)
    }
  });

  request.open ('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
  request.send ();
};
