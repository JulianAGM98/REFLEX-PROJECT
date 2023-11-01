import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"
import { ArrowForwardIcon, LinkIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
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
    const change_complete = () => addEvents(initialEvents())
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
  {getEventURL().href}
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
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": ["1em"], "zIndex": "999", "top": "0"}}>
  <Text>
  {`DevJG`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "560px", "width": "100%", "marginY": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`2em`}>
  <Avatar name={`Julian Gonzalez`} size={`xl`}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": "#F1F2F4"}}>
  {`Julián González`}
</Heading>
  <Text sx={{"padding": ["0px !important"], "color": "#C2C7CB"}}>
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
  <Box sx={{"fontSize": ["0.7em"], "color": "#C2C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`Ingeniero `}
</Text>
  {` de petróleos`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": ["0.7em"], "color": "#C2C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`Backend `}
</Text>
  {` Developer`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": ["0.7em"], "color": "#C2C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+1 `}
</Text>
  {` años de experiencia`}
</Box>
</Flex>
  <Text sx={{"color": "#C2C7CB"}}>
  {`Hola, mi nombre es Julian.
                 Soy ingeniero de petróleos apasionado por el desarrollo web y ciencia de datos.
                ¡Bienvendio a mi Web!`}
</Text>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": ["1em"], "color": "#F1F2F4"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#F1F2F4"}}>
  {`My projects`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#C2C7CB"}}>
  {`Da click para ver mis proyectos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#F1F2F4"}}>
  {`Youtube`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#C2C7CB"}}>
  {`Mi canal de youtube`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#F1F2F4"}}>
  {`GitHub`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#C2C7CB"}}>
  {`Todos mis repositorios`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://linkedin.com/in/julian-andr%C3%A9s-gonzalez-moreno/`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#F1F2F4"}}>
  {`LinkedIN`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#C2C7CB"}}>
  {`Mi experiencia`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": ["1em"], "color": "#F1F2F4"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#F1F2F4"}}>
  {`My projects`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#C2C7CB"}}>
  {`Da click para ver mis proyectos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#F1F2F4"}}>
  {`Youtube`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#C2C7CB"}}>
  {`Mi canal de youtube`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#F1F2F4"}}>
  {`GitHub`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#C2C7CB"}}>
  {`Todos mis repositorios`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/JulianAGM98`} isExternal={true} sx={{"width": "100%", "textDecoration": "None", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ["0.5em"], "bordeRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": ["1em"], "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": ["1em"], "color": "#F1F2F4"}}>
  {`LinkedIN`}
</Text>
  <Text sx={{"fontSize": ["0.7em"], "color": "#C2C7CB"}}>
  {`Mi experiencia`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack sx={{"marginBottom": "2em", "paddingBottom": "2em", "color": "#A3ABB2"}}>
  <Image src={`favicon.ico`}/>
  <Link as={NextLink} href={`https://github.com/JulianAGM98/REFLEX-PROJECT`} isExternal={true} sx={{"fontSize": ["0.7em"], "marginTop": ["0px !important"], "textDecoration": "None", "_hover": {}}}>
  {`© 2022 - 2023 Desing By: DevJG`}
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
