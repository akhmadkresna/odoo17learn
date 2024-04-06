# -*- coding: utf-8 -*-
{
    'name' : 'Customer Age',
    'description':"""
Menambahkan field umur pada customer.
    """,
    'version' : '1.0',
    'category': 'Base',
    'depends' : ['base','point_of_sale'],
    'data': [
        'views/res_partner_views.xml'
    ],
    'assets': {
        'point_of_sale._assets_pos': [
            'contact_age/static/src/**/*',
        ]
    },
    'installable': True,
    'license': 'LGPL-3',
}
