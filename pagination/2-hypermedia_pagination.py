#!/usr/bin/env python3
"""
Module documentation: Hypermedia pagination method for a dataset.
"""

import csv
from typing import List, Optional
from 0-simple_helper_function import index_range

class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Function documentation: Returns the specified page of the dataset.
        """
        assert isinstance(page, int) and page > 0, "Page must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0, "Page size must be a positive integer"

        dataset = self.dataset()

        start_idx, end_idx = index_range(page, page_size)
        if start_idx >= len(dataset):
            return []  # Out of range, return an empty list

        return dataset[start_idx:end_idx]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """
        Function documentation: Returns hypermedia pagination information for the dataset.
        """
        data_page = self.get_page(page, page_size)
        total_pages = len(self.dataset()) // page_size + (len(self.dataset()) % page_size > 0)

        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            'page_size': len(data_page),
            'page': page,
            'data': data_page,
            'next_page': next_page,
            'prev_page': prev_page,
            'total_pages': total_pages
        }


if __name__ == "__main__":
    # Example usage
    server = Server()

    # Print hypermedia pagination results
    print(server.get_hyper(1, 2))
    print("---")
    print(server.get_hyper(2, 2))
    print("---")
    print(server.get_hyper(100, 3))
    print("---")
    print(server.get_hyper(3000, 100))
