#!/usr/bin/env python3
"""
Module to define a function to get the floor of a float.
"""
from typing import List
import asyncio

from async_generator import async_generator


async def async_comprehension() -> List[float]:
    """Collects 10 random numbers using an async comprehensing.

    Returns:
        List of 10 random numbers.
    """
    return [number async for number in async_generator()]
