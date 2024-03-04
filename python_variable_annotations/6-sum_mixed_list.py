#!/usr/bin/env python3
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of a list of integers and floats.

    Args:
        mxd_lst: The list of integers and floats to sum.

    Returns:
        The sum of the list of integers and floats.
    """
    total = 0
    for num in mxd_lst:
        total += num
    return total
