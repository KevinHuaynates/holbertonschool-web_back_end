#!/usr/bin/env python3
"""
This module contains an asynchronous routine.
"""

import asyncio
from typing import List

from _1_basic_async_syntax import wait_random


async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    """
    This async routine takes in 2 int arguments.

    wait_n should return the list of all the delays (float values).

    Args:
        n: The number of times to spawn wait_random.
        max_delay: The maximum delay in seconds.

    Returns:
        A list of all the delays (float values) in ascending order.
    """

    # Create a list of tasks to spawn
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]

    # Spawn the tasks
    results = await asyncio.gather(*tasks)

    # Return the list of results in ascending order
    return sorted(results)
