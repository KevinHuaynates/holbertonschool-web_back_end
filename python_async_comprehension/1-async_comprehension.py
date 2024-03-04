#!/usr/bin/env python3

from typing import List

from . import async_generator


async def async_comprehension() -> List[float]:
    """
    This coroutine collects 10 random numbers using an async.
    """
    return [number async for number in async_generator()]
