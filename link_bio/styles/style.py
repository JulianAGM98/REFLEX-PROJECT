import reflex as rx
from enum import Enum
from .colors import Color as Color
from .colors import TextColor as TextColor
from .fonts import Font as Font
# Constats
MAX_WIDTH = "560px"

# Sizes

class sizes(Enum):
    ZERO = "0px !important",
    SMALLL = "0.5em",
    MEDIUM = "0.7em",
    DEFAULT = "1em",
    LARGE = "1.5em",
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

nav_title_style = dict(
    font_size=sizes.LARGE.value,
)


title_style = dict(
    width="100%",
    padding_top=sizes.DEFAULT.value,
    color= TextColor.HEADER.value,
)

buttom_title_style = dict(
    font_size=sizes.DEFAULT.value,
    color= TextColor.HEADER.value,
)

buttom_body_style = dict(
    font_size=sizes.MEDIUM.value,
    color= TextColor.BODY.value,
)

