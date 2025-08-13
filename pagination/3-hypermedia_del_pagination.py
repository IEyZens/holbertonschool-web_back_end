#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Retrieve a page of the dataset using deletion-resilient pagination.

        Args:
            index (int): The starting index of the page (0-indexed).
                         Must be a valid integer within the dataset range.
            page_size (int): The number of items to include in the page.

        Returns:
            Dict: A dictionary containing:
                - index (int): The starting index of the current page.
                - next_index (int or None): The index to use for the next page,
                  or None if at the end of the dataset.
                - page_size (int): The number of items in the current page.
                - data (List[List]): The dataset entries for the current page.
        """
        assert isinstance(index, int) and 0 <= index < len(
            self.indexed_dataset())

        dataset = self.indexed_dataset()

        data = []
        current_index = index

        while len(data) < page_size and current_index < len(dataset):
            if current_index in dataset:
                data.append(dataset[current_index])
            current_index += 1

        if not data:
            return {
                "index": index,
                "next_index": None,
                "page_size": 0,
                "data": []
            }

        next_index = current_index

        while (next_index is not None and next_index not in dataset and
               next_index < len(dataset)):
            next_index += 1
        if next_index >= len(dataset):
            next_index = None

        result = {
            "index": index,
            "next_index": next_index,
            "page_size": len(data),
            "data": data
        }

        return result
