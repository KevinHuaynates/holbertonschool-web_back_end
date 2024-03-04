#!/usr/bin/env python3
"""
Asynchronous routine that executes multiple coroutines concurrently.
"""

import asyncio
from typing import List
from random import uniform
from asyncio import Task

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Asynchronous routine that executes multiple coroutines concurrently.

    Args:
        n (int): Number of times to spawn wait_random coroutine.
        max_delay (int): Maximum delay in seconds for each wait_random.

    Returns:
        List[float]: List of delays in ascending order.
    """
    delays: List[float] = []
    tasks: List[Task] = []

    for _ in range(n):
        tasks.append(asyncio.create_task(wait_random(max_delay)))

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
