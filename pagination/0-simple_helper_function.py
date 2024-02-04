#!/usr/bin/env python3
"""
Module documentation: Simple helper function for pagination.
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Function documentation: Returns the start and end indices for pagination.
    """
    start_idx = (page - 1) * page_size
    end_idx = start_idx + page_size
    return start_idx, end_idx
