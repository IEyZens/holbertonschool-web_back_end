#!/usr/bin/env python3
"""
This module provides a function that returns a tuple containing a string and
the square of a number as a float.
"""
import typing


def to_kv(k: str, v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    """
    Returns a tuple with the string 'k' and the square of 'v' as a float.
    """
    return (k, v ** 2)
