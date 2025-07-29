#!/usr/bin/env python3
"""
This module provides a function that returns a list of tuples containing
elements and their lengths from an iterable of sequences.
"""
import typing


def element_length(
    lst: typing.Iterable[typing.Sequence]
) -> typing.List[typing.Tuple[typing.Sequence, int]]:
    """
    Returns a list of tuples, each containing an element from the iterable and
    its length.
    """
    return [(i, len(i)) for i in lst]
