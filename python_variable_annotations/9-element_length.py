#!/usr/bin/env python3
from typing import Iterable, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples with the element and its length.

    Args:
        lst: The iterable of sequences.

    Returns:
        A list of tuples with the element and its length.
    """
    return [(i, len(i)) for i in lst]
