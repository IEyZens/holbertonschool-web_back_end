#!/usr/bin/env python3
"""
This module provides a function to compute the sum of a list of floating-point
numbers.
"""
import typing


def sum_list(input_list: typing.List[float]) -> float:
    """
    Returns the sum of a list of floating-point numbers.
    """
    result = 0
    for i in input_list:
        result = result + i
    return result
