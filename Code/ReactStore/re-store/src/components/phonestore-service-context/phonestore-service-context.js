import React from "react"

const {
    Provider: PhoneStoreServiceProvider,
    Consumer: PhoneStoreServiceConsumer
} = React.createContext()

export {
    PhoneStoreServiceProvider,
    PhoneStoreServiceConsumer
}