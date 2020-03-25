import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import* as actions from  '../redux/Actions';
import App from '../App';





function mapStateToProps(state){
    return {
        items: state.items,
        cartItems: state.cartItems
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch)
}


const Main = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default Main