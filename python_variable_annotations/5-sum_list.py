#!/usr/bin/env python3
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Return the sum of a list of floats.

    Args:
        input_list: The list of floats to sum.

    Returns:
        The sum of the list of floats.
    """
    total = 0
    for num in input_list:
        total += num
    return total
