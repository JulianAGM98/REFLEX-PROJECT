import reflex as rx


def link_buttom(text: str, url: str) -> rx.Component:
    return rx.link(
            rx.button(text),
            href = url,
            is_external= True
    )
    