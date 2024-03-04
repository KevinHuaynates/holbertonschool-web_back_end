#!/usr/bin/env python3
"""
Function to measure the runtime of the wait_n coroutine.
"""

import time
from typing import Callable

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the runtime of wait_n(n, max_delay) and return the average time per coroutine.

    Args:
        n (int): Number of times to spawn wait_random coroutine.
        max_delay (int): Maximum delay in seconds for each wait_random coroutine.

    Returns:
        float: Average time per coroutine.
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    total_time = end_time - start_time
    return total_time / n

# For testing purposes
if __name__ == "__main__":
    import asyncio

    n = 5
    max_delay = 9
    print(measure_time(n, max_delay))
