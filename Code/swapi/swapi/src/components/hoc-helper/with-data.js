import React, {Component} from "react"

import Spinner from "../spinner"
import ErrorMsg from "../error-msg"
import ContainerDetailView from "../container-detail-view"

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false
        }
        onItemListLoaded = (data) => {
            this.setState({
                data,
                loading: false,
            })
        }
        onError = (err) => {
            this.setState({
                error: true,
                loading: false
            })
        }

        componentDidMount() {
            this.update()
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update()
            }
        }

        update() {
            this.props.getData()
                .then(this.onItemListLoaded)
                .catch(this.onError)
        }

        render() {
            const {data, error, loading} = this.state

            if (loading) {
                return <ContainerDetailView contentDetail={<Spinner/>}/>
            }
            if (error) {
                return <ContainerDetailView contentDetail={<ErrorMsg/>}/>
            }
            return <View {...this.props} data={data}/>
        }
    }
}

export default withData