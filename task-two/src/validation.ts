/**
 * Stretch goal - Validate all the emails in this files and output the report
 *
 * @param {string[]} inputPath An array of csv files to read
 * @param {string} outputFile The path where to output the report
 */
import * as fs from 'fs';
import {promises as dns} from 'dns';
import { domain } from 'process';

async function validateEmailAddresses(inputPath: string[], outputFile: string) {

  let arrayOfJson;

  for (const path of inputPath) {
    arrayOfJson = fs.createReadStream(path);
  }
  const writeStream = fs.createWriteStream(outputFile);
  let csv = ' ';
  for await (const path of arrayOfJson as fs.ReadStream) {
    csv += path;
  }
let combinedEmails = csv.split('\n');
combinedEmails
  const correctEmailDomain: string[] = [];
  combinedEmails.map(async (email) =>{
    email
    const domains = email.split('@')[1];
    if(domains){ 
      
      let response = await dns.resolve(domains, "MX").then(data=>true).catch(err=>false)
      if( response){
        writeStream.write(email+"\n")
      }


    
    }

    domains
    
  })
}
validateEmailAddresses(
  [
    '/Users/e/Desktop/DECAGON/week-4-node-008-Abumuazu/task-two/fixtures/inputs/medium-sample.csv',
  ],
  '/Users/e/Desktop/DECAGON/week-4-node-008-Abumuazu/task-two/fixtures/outputs/validate.csv',
);

export default validateEmailAddresses;
