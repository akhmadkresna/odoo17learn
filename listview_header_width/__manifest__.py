# -*- coding: utf-8 -*-
{
    'name' : 'Listview Header Resize',
    'description':"""
Odoo remember user modification on listview header width
    """,
    'version' : '1.0',
    'category': 'Web',
    'depends' : ['web'],
    'assets': {
        'web.assets_backend': [
            'listview_header_width/static/src/js/list_renderer.js',
        ]

    },
    'installable': True,
    'license': 'LGPL-3',
}