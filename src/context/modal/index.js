import React from 'react'

const context = React.createContext()
const useModalContext = () => React.useContext(context)

export {
    context,
    useModalContext
}