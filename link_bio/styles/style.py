import reflex as rx
from enum import Enum
from .colors import Color as Color
from .colors import TextColor as TextColor

# Constats
MAX_WIDTH = "560px"

# Sizes

class sizes(Enum):
    ZERO = "0px !important",
    SMALLL = "0.5em",
    MEDIUM = "0.7em",
    DEFAULT = "1em",
    BIG = "2em"

# Styles

BASE_STYLE = {
    "background_color": Color.BACKGROUD.value,
    rx.Button: {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "padding": sizes.SMALLL.value,
        "borde_radius": sizes.BIG.value,
        "color": TextColor.HEADER.value,
        "background_color": Color.CONTENT.value,
        "_hover": {
            "background_color": Color.SECONDARY.value,
        }
    },
    rx.Link: {
        "text_decoration": "None",
        "_hover": {}
    }
}

title_style = dict(
    width="100%",
    padding_top=sizes.DEFAULT.value,
    color= TextColor.HEADER.value
)

buttom_title_style = dict(
    font_size=sizes.DEFAULT.value,
    color= TextColor.HEADER.value
)

buttom_body_style = dict(
    font_size=sizes.MEDIUM.value,
    color= TextColor.BODY.value
)

