#!/usr/bin/env python3
"""
Module that provides a simple helper function for pagination.

This module defines the index_range function, which calculates
the start and end indexes for a given page number and page size.
"""


def index_range(page, page_size) -> tuple:
    """
    Return a tuple containing the start and end indexes for pagination.

    Args:
        page (int): The current page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        tuple: A tuple containing the start index and the end index for the
        given pagination parameters.
    """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
