import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <VStack>
  <VStack sx={{"position": "sticky", "bg": "blue", "paddingX": "15px", "paddingY": "7px", "zIndex": "999"}}>
  <Text sx={{"height": "30px", "color": "white"}}>
  {`DevJG`}
</Text>
</VStack>
  <VStack>
  <Avatar name={`DevJG`} size={`xl`}/>
  <Text>
  {`@DevJG`}
</Text>
  <Text>
  {`Hola, mi nombre es Julian.
                Soy ingeniero de petróleos apasionado por el desarrollo web y ciencia de datos.
                ¡Bienvendio a mi Web!`}
</Text>
</VStack>
  <VStack>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true}>
  <Button>
  {`My projects`}
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true}>
  <Button>
  {`Youtube`}
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true}>
  <Button>
  {`GitHub`}
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true}>
  <Button>
  {`LinkedIN`}
</Button>
</Link>
</VStack>
  <VStack>
  <Image src={`favicon.ico`}/>
  <Link as={NextLink} href={`https://github.com/JulianAGM98/REFLEX-PROJECT`} isExternal={true}>
  {`@ 2022 - 2023 Desing By: DevJG`}
</Link>
</VStack>
</VStack>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
