import { useNavigate, useLocation } from 'react-router-dom';

const withRouter = Component => props => {
    const location = useLocation();
    const history = useNavigate();
    return <Component location={location} history={history} {...props} />;
};

export default withRouter;