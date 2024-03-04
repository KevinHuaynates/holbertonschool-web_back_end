#!/usr/bin/env python3
"""
Module to define a coroutine to measure the runtime of parallel comprehensions.
"""
from typing import List
import asyncio
from time import perf_counter
from async_comprehension import async_comprehension


async def measure_runtime() -> float:
    """
    Coroutine that measures the runtime of executing four times in parallel.
    """
    start_time = perf_counter()

    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end_time = perf_counter()

    return end_time - start_time
