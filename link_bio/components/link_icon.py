import reflex as rx
from link_bio.styles.style import sizes as sizes



def link_icon(url: str) -> rx.Component:
    return rx.link(
        rx.icon(
            tag="link"
        ),
        href = url,
        is_external= True,
    )