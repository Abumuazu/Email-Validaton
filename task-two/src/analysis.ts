/**
 * First task - Read the csv files in the inputPath and analyse them
 *
 * @param {string[]} inputPaths An array of csv files to read
 * @param {string} outputPath The path to output the analysis
 */
import validator from 'email-validator';
import csvtojson from 'csvtojson';
import fs from 'fs';
import domainExtractor from './utils/DomainExtractor';
import domainCounter from './utils/domainCounter';

async function analyseFiles(inputPath: string[], outputFile: string) {
  const domainExtractors = await domainExtractor(inputPath);
  const domainCounts = await domainCounter(inputPath);

  const result = {
    'Valid-Emails': domainExtractors.validEmails,
    totalEmailPassed: domainCounts.totalEmailPassed,
    totalValidEmails: domainCounts.totalValidEmails,
    categories: domainCounts.categories,
  };
  const json: string = JSON.stringify(result, null, ' ');
  const streamResult = fs.createWriteStream(outputFile);
  streamResult.write(json);
}
analyseFiles(
  ['./fixtures/inputs/medium-sample.csv'],
  './fixtures/outputs/news.json',
);

export default analyseFiles;
