import React from "react"
import PhoneListItem from "../phone-list-item"
import "./phone-list.css"
import {ContainerRow} from "../../containers"

const PhoneList = ({phones, onAddedToCart}) => {
    const content = (
        phones.map((phone) => {
                return (
                    <div key={phone.id}
                         className="col-6 col-md-4 d-flex justify-content-center mb-4">
                        <PhoneListItem
                            phone={phone}
                            onAddedToCart={() => onAddedToCart(phone.id)}
                        />
                    </div>
                )
            }
        )
    )
    return (
        <ContainerRow content={content}/>
    )
}

export default PhoneList
