import reflex as rx
from link_bio.components.link_icon import link_icon 
from link_bio.components.info_text import info_text 
from link_bio.styles.style import sizes as sizes
from link_bio.styles.colors import TextColor as TextColor
from link_bio.styles.colors import Color as Color
import link_bio.constants as constants

def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(name="Julian Gonzalez", 
                      size = "xl",
                      color=TextColor.HEADER.value,
                      bg=Color.CONTENT.value,
                      src="foto.png",
                      padding="2px",
                      border="2px",
                      border_color=Color.PRIMARY.value,

            ),
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
                    link_icon("icons/linkedin.svg", constants.LINKEDIN_URL),
                    link_icon("icons/github.svg", constants.GITHUB_URL),
                    link_icon("icons/instagram.svg", "https://x.com"),
                    ),
                align_items="start",
                ),
            spacing=sizes.BIG.value
        ),
        rx.flex(
            info_text(f"Ingeniero ","de petróleos"),
            rx.spacer(),
            info_text(f"Python","Developer"),
            rx.spacer(),
            info_text(f"Flask ","framework"),
            width="100%"
        ),
        rx.text("""Hola, mi nombre es Julian.
                 Soy ingeniero de petróleos apasionado por el desarrollo web y ciencia de datos.
                ¡Echale un vistaso a mi hoja de vida!""",
                color= TextColor.BODY.value,
                font_size=sizes.DEFAULT.value
                ),
        align_items="start",
        spacing=sizes.BIG.value
     )