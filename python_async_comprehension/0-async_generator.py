#!/usr/bin/env python3
"""
This module provides an asynchronous generator that yields random numbers
after waiting 1 second for each of 10 iterations.
"""

import random
import asyncio


async def async_generator():
    """
    Asynchronously yields a random float between 0 and 10 after waiting
    1 second, repeated 10 times.
    """
    max_delay: int = 10
    for i in range(10):
        delay = random.uniform(0, max_delay)
        await asyncio.sleep(1)
        yield delay
