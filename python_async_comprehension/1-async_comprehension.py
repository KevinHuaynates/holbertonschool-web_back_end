#!/usr/bin/env python3
"""
This module defines a coroutine that collects 10 random numbers.
"""

import asyncio
from typing import List
from random import uniform
from itertools import islice

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Coroutine that collects 10 random numbers"""
    return [num async for num in islice(async_generator(), 10)]


