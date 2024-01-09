export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '901e1d80a2msha452d9dd87d167dp1dedc5jsna30d51ab6981',
    },
  };


export const fetchData = async(url, options)=> {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}