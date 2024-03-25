# -*- coding: utf-8 -*-
{
    'name' : 'Loading jokes',
    'description':"""
Menampilkan jokes saat odoo loading.
    """,
    'version' : '1.0',
    'category': 'Web',
    'depends' : ['web'],
    'assets': {
        'web.assets_backend': [
            'loading_jokes/static/src/js/loading_jokes.js',
        ]
    },
    'installable': True,
    'license': 'LGPL-3',
}
