import React, {Component} from "react"
import ErrorMsg from "../error-msg"
import Spinner from "../spinner"
import ContainerDetailView from "../container-detail-view"
import Invitation from "../invitation"

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item elegant-color">{label} {item[field]}</li>
    )
}
export {
    Record
}

export default class ItemDetail extends Component {
    state = {
        item: null,
        image: null,
        loading: true,
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.setState({loading: true})
            this.updateItem()
        }
    }

    onItemLoaded = (item) => {
        this.setState({
            item,
            image: this.props.getImageUrl(item),
            loading: false
        })
    }

    onError = (err) => {
        console.log('💩💩💩')
        console.log(err)
        this.setState({
            error: true,
            loading: false
        })
    }

    updateItem() {
        const {itemId, getData} = this.props
        if (!itemId) {
            this.setState({item: null, image: null, needToShow: false})
            return
        }
        this.setState({item: true, image: true})
        getData(itemId)
            .then(this.onItemLoaded)
            .catch(this.onError)
    };


    render() {
        const {item, image, loading, error} = this.state
        if (!item) {
            return <ContainerDetailView contentDetail={<Invitation/>}/>
        }
        const hasData = !(error || loading)
        const errorMsg = error ? <ErrorMsg/> : null
        const spinner = loading ? <Spinner/> : null

        const itemDetail = hasData ?
            <ItemView item={item} image={image} children={this.props.children}/> : null

        const content = (
            <React.Fragment>
                {errorMsg}
                {spinner}
                {itemDetail}
            </React.Fragment>
        )

        return (
            <ContainerDetailView contentDetail={content}/>
        )
    }
}

const ItemView = ({item, image, children}) => {
    return (
        <React.Fragment>
            <div className="col-4 d-flex align-items-center justify-content-center">
                <img src={image}
                     alt="" className="img img-fluid rounded z-depth-1"/>
            </div>
            <div className="col-8">
                <h2 className="display-5">{item.name}</h2>
            </div>
            <div className="col-12 mt-3">
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}
