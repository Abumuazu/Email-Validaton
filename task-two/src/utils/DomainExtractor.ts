/**
 * Afuntion to Extract Domain
 */
import validator from 'email-validator';
import fs from 'fs';

async function domainExtractor(inputPath: string[]) {
  let arrayOfJson;

  for (const path of inputPath) {
    arrayOfJson = fs.createReadStream(path);
  }
  let csv = ' ';
  for await (const path of arrayOfJson as fs.ReadStream) {
    csv += path;
  }
  const combinedEmails: string[] = csv.split('\n');
  combinedEmails;
  const correctEmailDomain: string[] = [];
  combinedEmails.map((data) => {
    const email = data;
    console.log(validator.validate(email));
    const validEmail: boolean = validator.validate(email);
    if (validEmail === true) {
      const emailDomain: string = email.split('@')[1];
      correctEmailDomain.push(emailDomain);
    }
  });
  const unique = new Set(correctEmailDomain);
  const validEmails: string[] = Array.from(unique);
  validEmails;

  return {
    validEmails: validEmails,
  };
}
domainExtractor(['/Users/e/Desktop/DECAGON/week-4-node-008-Abumuazu/task-two/fixtures/outputs/small-sample.csv'])
export default domainExtractor;
