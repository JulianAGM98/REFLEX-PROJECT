import reflex as rx
import link_bio.styles.style as styles
from link_bio.styles.style import sizes as sizes


def info_text(title: str, body: str) -> rx.Component: 
    return rx.box(
        rx.span(title, font_weight="bold", color="blue"),
        f" {body}", font_size=sizes.MEDIUM.value
    )