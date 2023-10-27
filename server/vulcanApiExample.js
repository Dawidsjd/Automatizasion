const {
  Keystore,
  AccountTools,
  VulcanHebe,
  registerAccount,
} = require('vulcan-api-js');

const fs = require('fs');

const setupVulcan = async () => {
  const keystore = new Keystore();
  await keystore.init();

  //   fs.writeFileSync('keystore.json', keystore.dumpToJsonString(), {
  //     encoding: 'utf-8',
  //   });

  //   keystore.loadFromJsonString(
  //     fs.readFileSync('keystore.json', { encoding: 'utf-8' })
  //   );

  const account = await registerAccount(
    keystore,
    '3S18RGQ',
    'powiatlezajski',
    '528677'
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

  //   const lessons = await client.getLessons();

  //   console.log('lessons: ', lessons);

  //   fs.writeFileSync('lessons.json', JSON.stringify(lessons, null, 2), {
  //     encoding: 'utf-8',
  //   });
  return client;
};

module.exports = setupVulcan;
