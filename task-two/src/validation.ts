/**
 * Stretch goal - Validate all the emails in this files and output the report
 *
 * @param {string[]} inputPath An array of csv files to read
 * @param {string} outputFile The path where to output the report
 */
import csvtojson from "csvtojson";
import * as fs from "fs";
import * as dns from "dns";

async function validateEmailAddresses(inputPath: string[], outputFile: string) {

  fs.writeFile(outputFile, 'Email\n', (error) => {
    if (error) throw error;
    console.log('something went wrong');
  });
  
  let combinedEmails = [];

  for (const path of inputPath) {
    const resolved = await csvtojson().fromFile(path);
    
    combinedEmails.push(resolved);
  }

  combinedEmails = combinedEmails.flat(1);
  const correctEmailDomain: string[] = [];
  for (const data of combinedEmails) {
    const email = data.Emails;
    
    const domains = email.split('@')[1];
    
    dns.resolve(domains, 'MX', (error, addresses) => {
      if (error) {
        console.error(error)
       
      }else if (addresses && addresses.length > 0) {
        
        fs.appendFile(
          outputFile,
          email + "\n",
          (err) => {
            if (err) return "error";
          },
        );
      }
    });
  }


}
validateEmailAddresses(
  ['/Users/e/Desktop/DECAGON/week-4-node-008-Abumuazu/task-two/fixtures/inputs/small-sample.csv'],
  '/Users/e/Desktop/DECAGON/week-4-node-008-Abumuazu/task-two/fixtures/outputs/gh.csv'
)

export default validateEmailAddresses;
