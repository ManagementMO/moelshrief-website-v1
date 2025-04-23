const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const sitemapUrl = 'https://mohammedelshrief.com/sitemap.xml';

// Google Search Console
const googleSubmitUrl = `https://www.google.com/ping?sitemap=${sitemapUrl}`;
exec(`curl "${googleSubmitUrl}"`, (error, stdout, stderr) => {
  if (error) {
    console.error('Error submitting to Google:', error);
    return;
  }
  console.log('Submitted to Google Search Console:', stdout);
});

// Bing Webmaster Tools
const bingSubmitUrl = `https://www.bing.com/ping?sitemap=${sitemapUrl}`;
exec(`curl "${bingSubmitUrl}"`, (error, stdout, stderr) => {
  if (error) {
    console.error('Error submitting to Bing:', error);
    return;
  }
  console.log('Submitted to Bing Webmaster Tools:', stdout);
}); 