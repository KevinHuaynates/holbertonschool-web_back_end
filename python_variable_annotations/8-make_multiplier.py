#!/usr/bin/env python3
from typing import Callable, Float


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by `multiplier`.

    Args:
        multiplier: The float to multiply by.

    Returns:
        A function that multiplies a float by `multiplier`.
    """
    return lambda x: x * multiplier
