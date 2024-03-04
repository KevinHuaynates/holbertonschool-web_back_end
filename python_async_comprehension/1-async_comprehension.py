#!/usr/bin/env python3
from typing import List
import asyncio

from async_generator import async_generator


async def async_comprehension() -> List[float]:
    """Collects 10 random numbers using an async comprehensing over async_generator.

    Returns:
        List of 10 random numbers.
    """
    return [number async for number in async_generator()]
