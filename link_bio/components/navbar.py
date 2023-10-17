import reflex as rx



def navbar() -> rx.component:
    return rx.vstack(
        rx.text(
            "DevJG",
            height = "30px",
            color = "white"
        ),
        position = "sticky",
        bg = 'blue',
        padding_x = "15px",
        padding_y = "7px",
        z_index = "999"
    )