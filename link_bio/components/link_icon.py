import reflex as rx
from link_bio.styles.style import sizes as sizes



def link_icon(image: str, url: str) -> rx.Component:
    return rx.link(
        rx.image(
            src=image,
            width=sizes.BIG.value
        ),
        href = url,
        is_external= True,
    )