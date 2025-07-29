#!/usr/bin/env python3
"""
This module provides a function that creates a multiplier function for
floating-point numbers.
"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """
    Returns a function that multiplies a float by the given multiplier.
    """
    def multiply_function(n: float):
        return n * multiplier
    return multiply_function
