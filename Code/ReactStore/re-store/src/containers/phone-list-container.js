import React, {Component} from "react"
import Spinner from "../components/spinner"
import ErrorIndicator from "../components/error-indicator"
import {fetchPhones, phoneAddedToCart} from "../actions"
import {compose} from "../utils"
import {withPhoneStoreService} from "../components/hoc"
import {connect} from "react-redux"
import PhoneList from "../components/phone-list"
import {bindActionCreators} from "redux"

class PhoneListContainer extends Component {
    componentDidMount() {
        this.props.fetchPhones()
    } 

    render() {
        const {phones, loading, error, onAddedToCart} = this.props
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorIndicator/>
        }
        return <PhoneList phones={phones} onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = ({phoneList: {phones, loading, error}}) => {
    return {phones, loading, error}
}
const mapDispatchToProps = (dispatch, {phoneStoreService}) => {
    return bindActionCreators({
        fetchPhones: fetchPhones(phoneStoreService),
        onAddedToCart: phoneAddedToCart
    }, dispatch)
}

export default compose(
    withPhoneStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PhoneListContainer)