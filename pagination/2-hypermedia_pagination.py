#!/usr/bin/env python3
"""
Module that provides simple pagination functionality.

It defines:
- index_range: Helper function to compute start and end indexes for pagination.
- Server: A class to paginate a dataset of popular baby names from a CSV file.
"""

import csv
import math
from typing import List


def index_range(page, page_size) -> tuple:
    """
    Compute the start and end indexes for a given pagination request.

    Args:
        page (int): The current page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        tuple: A tuple containing the start index and the end index for
               the given pagination parameters.
    """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)


class Server:
    """
    Server class to paginate a database of popular baby names.

    Attributes:
        DATA_FILE (str): Path to the CSV file containing the dataset.
        __dataset (List[List] or None): Cached dataset loaded from the CSV
        file.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Load and cache the dataset from the CSV file.

        The dataset is read only once and stored in memory. The header row
        of the CSV file is skipped.

        Returns:
            List[List]: The cached dataset as a list of rows.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retrieve a specific page of the dataset.

        Args:
            page (int): The page number to retrieve (1-indexed).
                        Must be a positive integer.
            page_size (int): The number of items per page.
                             Must be a positive integer.

        Returns:
            List[List]: A list of rows corresponding to the requested page.
                        Returns an empty list if the page is out of range.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)

        data = self.dataset()

        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """
        Retrieve a specific page of the dataset with hypermedia metadata.

        Args:
            page (int): The page number to retrieve (1-indexed).
                        Must be a positive integer.
            page_size (int): The number of items per page.
                             Must be a positive integer.

        Returns:
            dict: A dictionary containing:
                - page_size (int): The number of items in the current page.
                - page (int): The current page number.
                - data (List[List]): The dataset rows for the current page.
                - next_page (int or None): The next page number, or None if no
                next page.
                - prev_page (int or None): The previous page number, or None if
                no previous page.
                - total_pages (int): The total number of pages in the dataset.
        """
        data = self.get_page(page, page_size)
        total_pages = math.ceil(len(self.dataset()) / page_size)

        return {
            "page_size": len(data),
            "page": page,
            "data": self.get_page(page, page_size),
            "next_page": page + 1 if page < total_pages else None,
            "prev_page": page - 1 if page > 1 else None,
            "total_pages": total_pages
        }
