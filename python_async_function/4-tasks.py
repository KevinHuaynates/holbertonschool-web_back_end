#!/usr/bin/env python3
"""
Function to execute multiple coroutines concurrently using asyncio.Tasks.
"""

import asyncio
from typing import List
from asyncio import Task
from random import uniform

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Execute multiple coroutines concurrently using asyncio.Tasks.

    Args:
        n (int): Number of times to spawn task_wait_random coroutine.
        max_delay (int): Maximum delay in seconds for each coroutine.

    Returns:
        List[float]: List of delays in ascending order.
    """
    delays: List[float] = []
    tasks: List[Task] = []

    for _ in range(n):
        tasks.append(task_wait_random(max_delay))

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
