
/**
 * A funtion to calculate occurence to correct domain names Domain
 */
 import validator from 'email-validator';
 import csvtojson from 'csvtojson';
 import fs from 'fs';

async function domainCounter(inputPath: string[]) {
    let domainCount: { [data: string]: number } = {};
  
    let combinedEmails = [];
  
    for (let path of inputPath) {
      let resolved = await csvtojson().fromFile(path);
      console.log(resolved);
      combinedEmails.push(resolved);
    }
    combinedEmails = combinedEmails.flat(1);
    let correctDomain: string[] = [];
    combinedEmails.map((data) => {
      if (validator.validate(data.Emails) == true) {
        correctDomain.push(data.Emails.split('@')[1]);
      }
    });
    correctDomain.map((data) => {
      domainCount[data] ? (domainCount[data] += 1) : (domainCount[data] = 1);
    });
    console.log(domainCount);
    let totalEmailPassed: number = combinedEmails.length;
    let totalValidEmails: number = correctDomain.length;
    return {
      totalEmailPassed: totalEmailPassed,
      totalValidEmails: totalValidEmails,
      categories: domainCount,
    };

  }
  export default  domainCounter;