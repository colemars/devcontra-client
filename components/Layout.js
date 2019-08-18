import PropTypes from 'prop-types';
import AppBar from './AppBar';

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
};

const contentStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

const Layout = ({ children }) => (
  <div className="Layout" style={layoutStyle}>
    <AppBar />
    <div className="Content" style={contentStyle}>
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
