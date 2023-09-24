import React, { createContext, useState, useContext } from 'react'
import { SelectedFarmType } from '../../types'
import mockFarms from '../../mocks/mock-farms.json'

type FarmSelectionContextType = {
  selectedFarmOption: SelectedFarmType | null,
  handleSelectedFarmOption: (farmId: number) => void;
}

export const FarmSelectionContext = createContext<FarmSelectionContextType | null>(null);

export const FarmSelectionProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const farms: SelectedFarmType[]  = [...mockFarms.farms]
  const [selectedFarmOption, setSelectedFarmOption] = useState<SelectedFarmType | null>(null)

  const handleSelectedFarmOption = (farmId: number): void => {
    const farm = farms.find(farm => farm.id === farmId)
    if(!farm) return

    setSelectedFarmOption(farm)
  }

  return (
    <FarmSelectionContext.Provider value={{ selectedFarmOption, handleSelectedFarmOption }}>
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