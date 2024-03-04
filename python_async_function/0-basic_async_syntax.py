#!/usr/bin/env python3
"""
This module contains an asynchronous coroutine.
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    This coroutine takes in an argument.

    Args:
        max_delay: The maximum delay in seconds.

    Returns:
        A random delay between 0 and max_delay seconds.
    """

    # Generate a random delay between 0 and max_delay seconds
    delay = random.uniform(0, max_delay)

    # Wait for the random delay
    await asyncio.sleep(delay)

    # Return the random delay
    return delay
