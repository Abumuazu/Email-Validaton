/**
 * Afuntion to Extract Domain
 */
 import validator from 'email-validator';
 import csvtojson from 'csvtojson';
 import fs from 'fs';

   async function domainExtractor(inputPath: string[]) {
    let combinedEmails = [];
  
    for (let path of inputPath) {
      let resolved = await csvtojson().fromFile(path);
      console.log(resolved);
      combinedEmails.push(resolved);
    }
    combinedEmails = combinedEmails.flat(1);
    combinedEmails;
    let correctEmailDomain: string[] = [];
    combinedEmails.map((data) => {
      let email = data.Emails;
      email;
      console.log(validator.validate(email));
      let validEmail: boolean = validator.validate(email);
      if (validEmail == true) {
        let emailDomain: string = email.split('@')[1];
        correctEmailDomain.push(emailDomain);
      }
    });
    let unique = new Set(correctEmailDomain);
    let validEmails: string[] = Array.from(unique);
    validEmails;
  
    return {
      validEmails: validEmails,
    };
  }
  export default  domainExtractor