import reflex as rx
from link_bio.styles.style import sizes as sizes
from link_bio.styles.colors import TextColor as TextColor
from link_bio.styles.colors import Color as Color



def navbar() -> rx.component:
    return rx.hstack(
        rx.text(
            "DevJG",
        ),
        position = "sticky",
        bg = Color.CONTENT.value,
        padding_x = sizes.BIG.value,
        padding_y = sizes.DEFAULT.value,
        z_index = "999",
        top="0"
    )