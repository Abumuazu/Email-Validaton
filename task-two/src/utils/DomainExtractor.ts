/**
 * Afuntion to Extract Domain
 */
import validator from 'email-validator';
import csvtojson from 'csvtojson';
import fs from 'fs';

async function domainExtractor(inputPath: string[]) {
  let combinedEmails = [];

  for (const path of inputPath) {
    const resolved = await csvtojson().fromFile(path);
    console.log(resolved);
    combinedEmails.push(resolved);
  }
  combinedEmails = combinedEmails.flat(1);
  combinedEmails;
  const correctEmailDomain: string[] = [];
  combinedEmails.map((data) => {
    const email = data.Emails;
    email;
    console.log(validator.validate(email));
    const validEmail: boolean = validator.validate(email);
    if (validEmail == true) {
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
export default domainExtractor;
