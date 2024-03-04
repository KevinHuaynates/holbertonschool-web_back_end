#!/usr/bin/env python3
"""
Module to define a function to get the floor of a float.
"""
from typing import List
import asyncio
import time

from async_comprehension import async_comprehension


async def measure_runtime() -> float:
    """Measures the total runtime of four parallel async comprehensions.

    Returns:
        Total runtime in seconds.
    """
    start = time.time()

    coroutines = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*coroutines)

    end = time.time()

    return end - start
