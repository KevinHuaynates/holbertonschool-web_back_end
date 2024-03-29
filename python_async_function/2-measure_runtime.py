#!/usr/bin/env python3
"""
Function to measure the runtime of the wait_n coroutine.
"""

import asyncio
import time
from typing import Callable

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the runtime of wait_n(n, max_delay) and coroutine.

    Args:
        n (int): Number of times to spawn wait_random coroutine.
        max_delay (int): Maximum delay in seconds for coroutine.

    Returns:
        float: Average time per coroutine.
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    total_time = end_time - start_time
    return total_time / n
