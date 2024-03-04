#!/usr/bin/env python3
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by a given multiplier.

    Args:
        multiplier (float): The multiplier to be used.

    Returns:
        Callable[[flo]: A function that takes a float.
    """
    def multiplier_function(x: float) -> float:
        return x * multiplier

    return multiplier_function