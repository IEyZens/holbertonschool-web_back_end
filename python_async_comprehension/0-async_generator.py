#!/usr/bin/env python3
"""
This module contains an asynchronous generator function that yields random
float values between 0 and 10. Each value is yielded after waiting for one
second, and the generator runs for a total of ten iterations. This module
demonstrates the use of asynchronous generators and delayed value production
using asyncio in Python.
"""

import asyncio
import typing
import random


async def async_generator() -> typing.AsyncGenerator[float, None]:
    """
    Asynchronously yields a random floating-point number between 0 and 10,
    waiting one second between each value. This function demonstrates the use
    of async generators to produce values lazily and asynchronously.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
