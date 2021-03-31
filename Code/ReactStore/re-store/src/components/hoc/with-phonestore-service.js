import React from "react"
import {PhoneStoreServiceConsumer} from "../phonestore-service-context"

const withPhoneStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <PhoneStoreServiceConsumer>
                {
                    (phoneStoreService) => {
                        return (
                            <Wrapped
                                {...props}
                                phoneStoreService={phoneStoreService}
                            />
                        )
                    }
                }
            </PhoneStoreServiceConsumer>
        )
    }
}

export default withPhoneStoreService