import { createContext, FC, useReducer } from 'react'
import ITierList from '../interfaces/TierList'
import tierListMock from '../service/tierListMock'
import TierListReducer from '../function/TierListReducer'
import { TierListActions } from '../interfaces/TypesReducer'

interface ITierListContext {
  tierListData: ITierList
  dispatch: React.Dispatch<TierListActions>
}

const inititalState: ITierList = tierListMock

export const TierListContext = createContext({} as ITierListContext)

const TierListProvider: FC = ({ children }) => {
  const [tierListData, dispatch] = useReducer(TierListReducer, inititalState)

  return (
    <TierListContext.Provider
      value={{
        tierListData,
        dispatch
      }}
    >
      {children}
    </TierListContext.Provider>
  )
}

export default TierListProvider
