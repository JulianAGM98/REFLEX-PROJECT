import reflex as rx
from link_bio.styles.style import sizes as sizes
from link_bio.styles.colors import TextColor as TextColor
from link_bio.styles.colors import Color as Color
import link_bio.styles.style as styles



def navbar() -> rx.component:
    return rx.hstack(
        rx.box(
            rx.span("Julian ", color=Color.PRIMARY.value),
            rx.span(" Gonzalez ", color=Color.SECONDARY.value),
            rx.span(" | Python developer", color=Color.SECONDARY.value),
            style=styles.nav_title_style 
        ),
        position = "sticky",
        bg = Color.CONTENT.value,
        padding_x = sizes.BIG.value,
        padding_y = sizes.DEFAULT.value,
        z_index = "999",
        top="0"
    )