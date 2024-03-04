#!/usr/bin/env python3
"""
Module to define a function to get the floor of a float.
"""
import asyncio
import random


async def async_generator():
    """
    This generator yields random numbers between 0 and 10, asynchronously.
    """
    for _ in range(10):
        await asyncio.sleep(1)  # Yield control
        yield random.randint(0, 10)
