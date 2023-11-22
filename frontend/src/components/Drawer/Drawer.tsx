import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../shared/Sidebar/Sidebar'

type SidebarDrawerPropsType={
    children:React.ReactNode
}

export const  SidebarDrawer:React.FC<SidebarDrawerPropsType>=({children})=> {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      
        <span onClick={onOpen}>
            {children}
        </span>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar isDrawer={true}/>
        </DrawerContent>
      </Drawer>
    </>
  )
}