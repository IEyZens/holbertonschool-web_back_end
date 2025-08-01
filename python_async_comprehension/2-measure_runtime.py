#!/usr/bin/env python3
"""
This module contains a coroutine that measures the total runtime for executing
four instances of async_comprehension in parallel using asyncio.gather.
It helps illustrate the efficiency gains from running asynchronous operations
concurrently.
"""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Runs async_comprehension four times in parallel, measures the total
    execution time in seconds, and returns this value as a float. This
    function demonstrates how concurrency with asyncio.gather can optimize
    runtime for multiple asynchronous tasks.
    """
    start = time.perf_counter()
    tasks = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*tasks)
    end = time.perf_counter()
    total = end - start
    return total
