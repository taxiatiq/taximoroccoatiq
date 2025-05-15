const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { createReadStream } = require('fs');
const { createUnzip } = require('zlib');
const { Extract } = require('unzipper');

async function extractZip() {
  try {
    await fs.createReadStream('taximorocco-main.zip')
      .pipe(Extract({ path: process.cwd() }))
      .promise();
    
    console.log('Extraction complete');
    
    // Change directory and install dependencies
    process.chdir('taximorocco-main');
    execSync('npm install', { stdio: 'inherit' });
  } catch (error) {
    console.error('Error during extraction:', error);
    process.exit(1);
  }
}

extractZip();