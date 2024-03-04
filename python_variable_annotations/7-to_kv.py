#!/usr/bin/env python3
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with the string `k` and the square of the int/float `v`.

    Args:
        k: The string key.
        v: The int/float value.

    Returns:
        A tuple with the string `k` and the square of the int/float `v`.
    """
    return (k, v ** 2)
