#!/usr/bin/env python3
"""
Function to create an asyncio.Task for wait_random coroutine.
"""

import asyncio
from typing import Callable

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Create an asyncio.Task for wait_random coroutine.

    Args:
        max_delay (int): Maximum delay in seconds for wait_random.

    Returns:
        asyncio.Task: Task representing the execution of wait_random.
    """
    loop = asyncio.get_event_loop()
    return loop.create_task(wait_random(max_delay))
