import fetch from 'node-fetch';

export default function fetchSamplePage() {
  const url = 'http://159.89.116.112/adriana/wp-json/wp/v2/pages/2';

  return fetch(url)
    .then(response => response.json());
}