// vulcanApiExample.js

const {
  Keystore,
  AccountTools,
  VulcanHebe,
  registerAccount,
} = require('vulcan-api-js');

const fs = require('fs');

const setupVulcan = async (indexNumber, schoolSymbol, password) => {
  const keystore = new Keystore();
  await keystore.init();

  fs.writeFileSync('keystore.json', keystore.dumpToJsonString(), {
    encoding: 'utf-8',
  });

  keystore.loadFromJsonString(
    fs.readFileSync('keystore.json', { encoding: 'utf-8' })
  );

  const account = await registerAccount(
    keystore,
    indexNumber,
    schoolSymbol,
    password
  );
  fs.writeFileSync('account.json', AccountTools.dumpToJsonString(account), {
    encoding: 'utf-8',
  });

  const client = new VulcanHebe(
    keystore,
    AccountTools.loadFromJsonString(
      fs.readFileSync('account.json', { encoding: 'utf-8' })
    )
  );

  await client.selectStudent();

  return client;
};

module.exports = setupVulcan;
