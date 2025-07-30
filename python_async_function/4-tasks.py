#!/usr/bin/env python3
"""
This module provides a coroutine that returns a list of delays from multiple
task_wait_random calls, in ascending order.
"""

import asyncio
import typing
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> typing.List[float]:
    """
    Runs task_wait_random n times concurrently with the specified max_delay
    and returns a list of all delays in ascending order.
    """
    delays: typing.List[float] = []
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
