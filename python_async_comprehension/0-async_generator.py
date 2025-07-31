#!/usr/bin/env python3
"""
This module provides an asynchronous generator that yields random numbers
after waiting 1 second for each of 10 iterations.
"""

import asyncio
import typing
import random


async def async_generator() -> typing.AsyncGenerator[float, None, None]:
    """
    Asynchronously yields a random float between 0 and 10 after waiting
    1 second, repeated 10 times.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
