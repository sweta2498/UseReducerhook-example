import ComponentWithFunction from "./ComponentWithFunction"

export  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, <ComponentWithFunction />]
      case 'REMOVE':
        return [...state].slice(0,-1)
      default :
          return state
    }
  }