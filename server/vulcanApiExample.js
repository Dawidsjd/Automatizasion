const { Keystore, AccountTools, VulcanHebe, registerAccount } = require('vulcan-api-js');
const fs = require('fs');

const main = async () => {
    const keystore = new Keystore();
    await keystore.init();

    fs.writeFileSync("keystore.json", keystore.dumpToJsonString(), { encoding: 'utf-8' });

    keystore.loadFromJsonString(fs.readFileSync("keystore.json", { encoding: 'utf-8' }));
    const account = await registerAccount(keystore, "3S1JKB4", "powiatlezajski", "997748");
    fs.writeFileSync("account.json", AccountTools.dumpToJsonString(account), { encoding: 'utf-8' });

    const client = new VulcanHebe(
        keystore,
        AccountTools.loadFromJsonString(fs.readFileSync("account.json", { encoding: 'utf-8' }))
    );

    await client.selectStudent();

    const students = await client.getStudents();

    fs.writeFileSync("dane_studentow.json", JSON.stringify(students, null, 2), { encoding: 'utf-8' });
};

main();
