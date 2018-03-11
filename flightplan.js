const plan = require('flightplan');
const uuid = require('uuid');

const distFolder = 'build';
const target = 'rockplusinc.com';

plan.target('default', [{
  // host: '139.59.26.160',
  host: '159.203.2.182',
  username: 'root',
  agent: process.env.SSH_AUTH_SOCK
}]);

const tmpDir = uuid.v1();

// run commands on localhost
plan.local((local) => {
  local.log('Copy files to remote hosts');
  const filesToCopy = local.exec(`find ${distFolder}/*`, {
    silent: true
  });
  // rsync files to all the target's remote hosts
  local.transfer(filesToCopy, `/tmp/${tmpDir}`);
});

// run commands on the target's remote hosts
plan.remote((remote) => {
  const serverDir = `/var/www/${target}`;
  remote.exec(`rm -rf ${serverDir}`);
  remote.exec(`mkdir -p ${serverDir}`);
  remote.exec(`cp -R /tmp/${tmpDir}/${distFolder}/* ${serverDir}`);
  remote.rm(`-rf /tmp/${tmpDir}`);
  remote.exec(`find /var/www/${target}`);
});
