#!/usr/bin/env python3
"""
This module provides a function to compute the sum of a list containing
integers and floating-point numbers.
"""
import typing


def sum_mixed_list(mxd_lst: typing.List[typing.Union[int, float]]) -> float:
    """
    Returns the sum of a list containing integers and floating-point numbers.
    """
    result = 0
    for i in mxd_lst:
        result = result + i
    return result
