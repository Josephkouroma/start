import EthName from './EthName'

const Account = function ({ account }) {
  // TODO!!!
  // if already logged in, it should show
  // the EthName component with the correct address
  // if not logged in, show a connect button
  // that when its clicked, will prompt us to login
  // and store the info on the page

  return <span>{account}</span>;
};

export default Account;