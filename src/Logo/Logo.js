import logo from '../logo.svg';

const Logo = (props) => {
  const {doDisplay} = props;
  return doDisplay ? <img src={logo} alt="logo" width='50' height='50'/> : null;
}

export default Logo