import reflex as rx
from link_bio.styles.style import sizes as sizes



def navbar() -> rx.component:
    return rx.hstack(
        rx.text(
            "DevJG",
        ),
        position = "sticky",
        bg = 'lightgray',
        padding_x = sizes.DEFAULT.value,
        padding_y = sizes.SMALLL.value,
        z_index = "999",
        top="0"
    )