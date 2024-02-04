#!/usr/bin/env python3
"""
Module documentation: Implementing pagination for baby names dataset.
"""

import pandas as pd
from typing import List, Dict

def read_csv_data(file_path: str) -> pd.DataFrame:
    """
    Function documentation: Reads CSV data and returns a DataFrame.
    """
    # Read CSV data
    data = pd.read_csv(file_path)
    return data

def paginate_data(data: pd.DataFrame, page: int, page_size: int) -> Dict:
    """
    Function documentation: Implements pagination for DataFrame.
    """
    # Implement pagination logic
    start_idx = (page - 1) * page_size
    end_idx = start_idx + page_size
    paginated_data = data.iloc[start_idx:end_idx].to_dict(orient='records')

    # Implement HATEOAS for pagination links
    total_pages = (len(data) + page_size - 1) // page_size
    next_page = page + 1 if page < total_pages else None
    prev_page = page - 1 if page > 1 else None

    pagination_info = {
        "data": paginated_data,
        "pagination": {
            "page": page,
            "page_size": page_size,
            "total_pages": total_pages,
            "next_page": next_page,
            "prev_page": prev_page,
        }
    }
    return pagination_info


if __name__ == "__main__":
    # Example usage
    file_path = "Popular_Baby_Names.csv"
    
    # Read CSV data
    baby_names_data = read_csv_data(file_path)

    # Paginate data
    page_number = 1
    page_size = 5  # Adjust page_size according to your needs
    paginated_result = paginate_data(baby_names_data, page_number, page_size)

    # Print paginated result
    print(paginated_result)
