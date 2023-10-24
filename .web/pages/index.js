import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { ArrowForwardIcon, LinkIcon } from "@chakra-ui/icons"
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
  <Box>
  <HStack sx={{"position": "sticky", "bg": "lightgray", "paddingX": ["1em"], "paddingY": ["0.5em"], "zIndex": "999", "top": "0"}}>
  <Text>
  {`DevJG`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`2em`}>
  <Avatar name={`Julian Gonzalez`} size={`xl`}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`}>
  {`Julián González`}
</Heading>
  <Text sx={{"padding": "0px !important"}}>
  {`@DevJG`}
</Text>
  <HStack>
  <Link as={NextLink} href={`https://x.com`} isExternal={true} sx={{"textDecoration": "None", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://x.com`} isExternal={true} sx={{"textDecoration": "None", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://x.com`} isExternal={true} sx={{"textDecoration": "None", "_hover": {}}}>
  <LinkIcon/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": ["0.7em"]}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "blue"}}>
  {`+13 `}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": ["0.7em"]}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "blue"}}>
  {`+13 `}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": ["0.7em"]}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "blue"}}>
  {`+13 `}
</Text>
  {` años de experiencia`}
</Box>
</Flex>
  <Text>
  {`Hola, mi nombre es Julian.
                 Soy ingeniero de petróleos apasionado por el desarrollo web y ciencia de datos.
                ¡Bienvendio a mi Web!`}
</Text>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"size": "lg", "width": "100%", "paddingTop": ["1em"]}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"]}}>
  {`My projects`}
</Text>
  <Text sx={{"fontSize": ["0.7em"]}}>
  {`Da click para ver mis proyectos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"]}}>
  {`Youtube`}
</Text>
  <Text sx={{"fontSize": ["0.7em"]}}>
  {`Mi canal de youtube`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"]}}>
  {`GitHub`}
</Text>
  <Text sx={{"fontSize": ["0.7em"]}}>
  {`Todos mis repositorios`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"]}}>
  {`LinkedIN`}
</Text>
  <Text sx={{"fontSize": ["0.7em"]}}>
  {`Mi experiencia`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`lg`} sx={{"size": "lg", "width": "100%", "paddingTop": ["1em"]}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"]}}>
  {`My projects`}
</Text>
  <Text sx={{"fontSize": ["0.7em"]}}>
  {`Da click para ver mis proyectos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"]}}>
  {`Youtube`}
</Text>
  <Text sx={{"fontSize": ["0.7em"]}}>
  {`Mi canal de youtube`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"]}}>
  {`GitHub`}
</Text>
  <Text sx={{"fontSize": ["0.7em"]}}>
  {`Todos mis repositorios`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"]}}>
  {`LinkedIN`}
</Text>
  <Text sx={{"fontSize": ["0.7em"]}}>
  {`Mi experiencia`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack sx={{"marginBottom": "2em"}}>
  <Image src={`favicon.ico`}/>
  <Link as={NextLink} href={`https://github.com/JulianAGM98/REFLEX-PROJECT`} isExternal={true} sx={{"fontSize": ["0.7em"], "textDecoration": "None", "_hover": {}}}>
  {`@ 2022 - 2023 Desing By: DevJG`}
</Link>
</VStack>
</Box>
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
