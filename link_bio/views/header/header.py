import reflex as rx
from link_bio.components.link_icon import link_icon 
from link_bio.components.info_text import info_text 
from link_bio.styles.style import sizes as sizes
from link_bio.styles.colors import TextColor as TextColor

def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(name="Julian Gonzalez", size = "xl"),
                rx.vstack(
                    rx.heading(
                            "Julián González", 
                            size="lg",
                            color= TextColor.HEADER.value
                    ),
                    rx.text(
                        "@DevJG",
                        padding=sizes.ZERO.value,
                        color= TextColor.BODY.value
                    ),
                    rx.hstack(
                    link_icon("https://x.com"),
                    link_icon("https://x.com"),
                    link_icon("https://x.com"),
                    ),
                align_items="start",
                ),
            spacing=sizes.BIG.value
        ),
        rx.flex(
            info_text(f"Ingeniero ","de petróleos"),
            rx.spacer(),
            info_text(f"Backend ","Developer"),
            rx.spacer(),
            info_text(f"+1 ","años de experiencia"),
            width="100%"
        ),
        rx.text("""Hola, mi nombre es Julian.
                 Soy ingeniero de petróleos apasionado por el desarrollo web y ciencia de datos.
                ¡Bienvendio a mi Web!""",
                color= TextColor.BODY.value
                ),
        align_items="start",
        spacing=sizes.BIG.value
     )