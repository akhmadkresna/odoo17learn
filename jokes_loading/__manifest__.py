# -*- coding: utf-8 -*-
{
    'name' : 'Loading Jokes',
    'description':"""
menampilkan jokes saat odoo loading
    """,
    'version' : '1.0',
    'category': 'Web',
    'depends' : ['web'],
    'assets': {
        'web.assets_backend': [
            'jokes_loading/static/src/js/jokes_loading.js'
        ]
    },
    'installable': True,
    'license': 'LGPL-3',
}
