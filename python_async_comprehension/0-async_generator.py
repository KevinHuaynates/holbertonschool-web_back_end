#!/usr/bin/env python3
"""
Module to define a function to get the floor of a float.
"""
from typing import Generator
import asyncio
import random


async def async_generator() -> Generator[float, None, None]:
    """Generator that yields a random number between 0 and 10.

    Yields:
        Random number between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.random() * 10
