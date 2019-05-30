import defaultImg from '../assets/honey-bear.png';

export const getQuotes = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch Quotes';

      return json;
    })
    .then(json => json.map(quote => ({
      name: quote.character,
      quote: quote.quote,
      image: quote.image || defaultImg
    })));
};
