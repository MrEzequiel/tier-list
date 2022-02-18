import { useContext } from 'react'
import { TierListContext } from '../context/TierListContext'

const useTierList = () => {
  const ctx = useContext(TierListContext)
  return ctx
}

export default useTierList
