import React from 'react';

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: '_id',
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Category',
        accessor: 'category',
    },
    {
        Header: 'Subcategory',
        accessor: 'subcategory',
    },
    {
        Header: 'CreatedAt',
        accessor: 'createdAt',
    },
    {
        Header: 'UpdatedAt',
        accessor: 'updatedAt',
    },
    {
        Header: 'ModelId',
        accessor: 'modelId',
    },
    {
        Header: 'Pid',
        accessor: 'pid',
    },
    {
        Header: 'Features',
        id:'Features',
        accessor : data =>
            data.features.map(item => (
              <div>
                <span>{item}</span>
              </div>
            ))
    },
    {
        Header: 'Specifications',
        columns: [
            {
            Header : 'Name',
            id:'specificationName',
            accessor : data =>
            data.specifications.map(item => (
              <div>
                <span>{item.name}</span>
              </div>
            ))
        },
        {
            Header : 'Category',
            id:'specificationCategory',
            accessor : data =>
            data.specifications.map(item => (
              <div>
                <span>{item.category}</span>
              </div>
            ))
        },
        {
            Header : 'Value',
            id:'specificationValue',
            accessor : data =>
            data.specifications.map(item => (
              <div>
                <span>{item.value}</span>
              </div>
            ))
        },
    ]
    },
    {
        Header: 'Description',
        id:'Description',
        accessor : data =>
        data.description.split(',').map((line)=><div>{line}</div>),
        
    },
    {
        Header: 'Datasheet',
        accessor: 'datasheet',
    },
    {
        Header: 'Link',
        accessor: 'link',
    },
    {
        Header: 'Thumbnail',
        accessor: 'thumbnail',
    }
]