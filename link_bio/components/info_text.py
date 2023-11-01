import reflex as rx
import link_bio.styles.style as styles
from link_bio.styles.style import sizes as sizes
from link_bio.styles.colors import TextColor as TextColor
from link_bio.styles.colors import Color as Color

def info_text(title: str, body: str) -> rx.Component: 
    return rx.box(
        rx.span(
            title, font_weight="bold",
            color=Color.PRIMARY.value
        ),
        f" {body}", 
        font_size=sizes.MEDIUM.value,
        color = TextColor.BODY.value
    )