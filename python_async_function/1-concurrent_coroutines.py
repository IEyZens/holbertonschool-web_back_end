#!/usr/bin/env python3
"""
This module provides a coroutine that executes multiple asynchronous delays
and returns them in ascending order.
"""

import typing
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> typing.List[float]:
    """
    Runs wait_random n times concurrently with the specified max_delay and
    returns a list of all delays in ascending order.
    """
    delays: typing.List[float] = []
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
