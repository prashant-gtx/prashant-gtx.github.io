import fs from 'fs';
import https from 'https';

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200 || response.statusCode === 301 || response.statusCode === 302) {
        if (response.statusCode === 301 || response.statusCode === 302) {
          // Follow redirect
          download(response.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(`Failed to download ${url}. Status code: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err.message);
    });
  });
};

const images = [
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', dest: './public/images/python.svg' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', dest: './public/images/sql.svg' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg', dest: './public/images/kafka.svg' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', dest: './public/images/aws.svg' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg', dest: './public/images/r.svg' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', dest: './public/images/pandas.svg' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', dest: './public/images/numpy.svg' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', dest: './public/images/tensorflow.svg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png', dest: './public/images/tableau.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg', dest: './public/images/powerbi.svg' }
];

async function run() {
  for (const img of images) {
    console.log(`Downloading ${img.dest}...`);
    try {
      await download(img.url, img.dest);
      console.log(`Success: ${img.dest}`);
    } catch (e) {
      console.error(`Error downloading ${img.dest}:`, e);
      // Fallback
      fs.copyFileSync('./public/images/placeholder.webp', img.dest);
    }
  }
}

run();
