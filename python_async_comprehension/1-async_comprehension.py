#!/usr/bin/env python3
"""
Module to define a coroutine 10 random numbers using async comprehensions.
"""
import asyncio
from typing import List
from random import uniform


async def async_generator() -> float:
    """
    Coroutine that yields a random number between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield uniform(0, 10)


async def async_comprehension() -> List[float]:
    """
    Coroutine that collects 10 random numbers using async comprehensions.
    """
    return [num async for num in async_generator()]
