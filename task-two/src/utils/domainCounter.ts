/**
 * A funtion to calculate occurence to correct domain names Domain
 */
import validator from 'email-validator';
import fs from 'fs';

async function domainCounter(inputPath: string[]) {
  const domainCount: { [data: string]: number } = {};

  let arrayOfJson;

  for (const path of inputPath) {
    arrayOfJson = fs.createReadStream(path);
  }
  let csv = ' ';
  for await (const path of arrayOfJson as fs.ReadStream) {
    csv += path;
  }
  const combinedEmails: string[] = csv.split('\n');
  const correctDomain: string[] = [];
  combinedEmails.map((data) => {
    if (validator.validate(data) === true) {
      correctDomain.push(data.split('@')[1]);
    }
  });
  correctDomain.map((data) => {
    domainCount[data] ? (domainCount[data] += 1) : (domainCount[data] = 1);
  });

  const totalEmailPassed: number = combinedEmails.length;
  const totalValidEmails: number = correctDomain.length;
  return {
    totalEmailPassed: totalEmailPassed,
    totalValidEmails: totalValidEmails,
    categories: domainCount,
  };
}
domainCounter(['/Users/e/Desktop/DECAGON/week-4-node-008-Abumuazu/task-two/fixtures/outputs/small-sample.csv'])
export default domainCounter;
