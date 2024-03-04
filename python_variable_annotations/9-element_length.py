#!/usr/bin/env python3
"""
Module to define a function to get the floor of a float.
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Returns a list of tuples containing each element of lst and its length.

    Args:
        lst (Iterable[Sequence]): The input iterable.

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples.
    """
    return [(i, len(i)) for i in lst]
