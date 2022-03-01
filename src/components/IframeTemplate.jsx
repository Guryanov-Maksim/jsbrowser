import React from 'react';
// import axios from 'axios';

const IframeTemplate = ({ tabData }) => (
  <iframe srcDoc={tabData.content} title={tabData.name} width="100%" height="100%" />
);

export default IframeTemplate;

// const getHTMLTemplate = (tabData) => (
//   `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>IFrame-${tabData.id}</title>
//     <style>
//       body { font-family: sans-serif; background-color: hsl(50, 40%, 95%); padding: 50px; }
//       h1, h2 { text-align: center; font-weight: normal; }
//       details { font-size: 1rem; }
//       details summary { font-size: 1.2em; }
//     </style>
//   </head>
//   <body>
//     <h1>Tab name: ${tabData.name}</h1>
//     <h2>Tab Id: ${tabData.id}</h2>
//     <details>
//       <summary>Tab metadata</summary>
//       <pre>${JSON.stringify(tabData, null, 4)}</pre>
//     </details>
//   </body>
//   </html>`
// );

// const IframeTemplate = ({ tabData }) => (
//   <iframe srcDoc={tabData.content} title={tabData.name} width="100%" height="100%" />
// );

// const IframeTemplate = ({ tabData }) => {
// const IframeTemplate = ({ tabData }) => (
//   const url = `https://hexlet-allorigins.herokuapp.com/get?url=${encodeURIComponent('https://youtube.com')}`;
//   const url = 'https://hexlet-allorigins.herokuapp.com/get?disableCache=true&url=https://getbootstrap.com/docs/4.4/components/media-object/';
//   const url = 'https://cors-anywhere.herokuapp.com/https://google.com';
//   const url = 'https://cors-anywhere.herokuapp.com/https://webpack.js.org/guides/getting-started/';
//   const url = 'https://cors-anywhere.herokuapp.com/https://example.org';

//   const [cont, setContent] = useState('');

//   useEffect(async () => {
//     const response = await axios.get(url, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
//     // const response = await fetch(url, {
//     //   method: 'GET',
//     //   headers: {
//     //     'X-Requested-With': 'XMLHttpRequest',
//     //   },
//     // });
//     // console.log(response);
//     // const blob = await response.blob();
//     // const urlObject = URL.createObjectURL(blob);
//     // const temp = urlObject.blob;
//     // console.log(response.data);
//     // setContent(urlObject);
//     setContent(response.data);
//   }, []);

//   return (
//     <iframe srcDoc={getHTMLTemplate(tabData)} title={tabData.name} width="100%" height="100%" />
//     <iframe srcDoc={tabData.content} title={tabData.name} width="100%" height="100%" />
//     <iframe src={cont} title={tabData.name} width="100%" height="100%" />
//   );
// };
