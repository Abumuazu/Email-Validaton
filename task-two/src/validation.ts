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

  for (let path of inputPath) {
    let resolved = await csvtojson().fromFile(path);
    console.log(resolved);
    combinedEmails.push(resolved);
  }
  console.log(combinedEmails);
  combinedEmails = combinedEmails.flat(1);
  let correctEmailDomain: string[] = [];
  for (let data of combinedEmails) {
    let email = data.Emails;
    email;
    const domains = email.split('@')[1];
    console.log(domains);
    dns.resolve(domains, 'MX', (error, addresses) => {
      if (error) {
        console.error(error)
       
      }else if (addresses && addresses.length > 0) {
        console.log(addresses);
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
