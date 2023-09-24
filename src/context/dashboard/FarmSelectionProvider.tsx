import React, { createContext, useState, useContext } from 'react'
import { FarmType } from '../../types'
import mockFarms from '../../mocks/mock-farms.json'

type FarmSelectionContextType = {
  farms: FarmType[],
  selectedFarmOption: FarmType,
  handleSelectedFarmOption: (farmId: number) => void;
}

export const FarmSelectionContext = createContext<FarmSelectionContextType | null>(null);

export const FarmSelectionProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const farms: FarmType[]  = [...mockFarms.farms]
  const [defaultFarmSelected] = farms
  const [selectedFarmOption, setSelectedFarmOption] = useState<FarmType>(defaultFarmSelected)

  const handleSelectedFarmOption = (farmId: number): void => {
    const farm = farms.find(farm => farm.id === farmId)
    if(!farm) return

    setSelectedFarmOption(farm)
  }

  return (
    <FarmSelectionContext.Provider value={{farms, selectedFarmOption, handleSelectedFarmOption }}>
      {children}
    </FarmSelectionContext.Provider>
  )
}

export const useFarmSelectionContext = (): FarmSelectionContextType => {
  const context = useContext(FarmSelectionContext)
  if (!context) {
    throw new Error('useFarmSelectionContext must be used within a FarmSelection Provider')
  }
  return context
}

export default FarmSelectionProvider