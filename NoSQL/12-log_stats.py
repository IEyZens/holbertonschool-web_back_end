#!/usr/bin/env python3
"""Script that provides some stats about Nginx logs stored in MongoDB."""

from pymongo import MongoClient

if __name__ == "__main__":
    myclient = MongoClient('mongodb://localhost:27017/')
    nginx_collection = myclient.logs.nginx

    total_logs = nginx_collection.count_documents({})

    GET = nginx_collection.count_documents({'method': 'GET'})
    POST = nginx_collection.count_documents({'method': 'POST'})
    PUT = nginx_collection.count_documents({'method': 'PUT'})
    PATCH = nginx_collection.count_documents({'method': 'PATCH'})
    DELETE = nginx_collection.count_documents({'method': 'DELETE'})

    status = nginx_collection.count_documents(
        {'method': 'GET'}, {'path=': '/status'}
    )

    print(total_logs, 'logs')

    print('Methods:')

    print('\tmethod GET:', GET)
    print('\tmethod POST:', POST)
    print('\tmethod PUT:', PUT)
    print('\tmethod PATCH:', PATCH)
    print('\tmethod DELETE:', DELETE)

    print(status, 'status check')
