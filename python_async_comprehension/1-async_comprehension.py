#!/usr/bin/env python3
"""
This module defines a coroutine using async comprehension.
"""
import asyncio
from typing import List
from random import uniform

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Coroutine that collects 10 random numbers using async comprehension."""
    async_gen = async_generator()
    random_numbers = []
    async for num in async_gen:
        random_numbers.append(num)
        if len(random_numbers) == 10:
            break
    return random_numbers
