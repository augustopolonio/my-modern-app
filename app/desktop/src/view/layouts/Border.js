Ext.define('MyModernApp.view.layouts.Border', {
    extend: 'Ext.Panel',
    alias: 'widget.border_layout',
    title: 'Exemplo Border Layout',
    // requires: [
    //     'Ext.panel.Collapser'
    // ],
    layout: {
        type: 'vbox'
    },
    defaults: {
        border: 1,
        shadow: true,
        margin: 5
    },

    weighted: true,

    items: [
        {
            xtype: 'panel',
            docked: 'top',
            title: 'Top panel',
            html: 'Header here',
            height: 100
        },
        {
            xtype: 'panel',
            docked: 'left',
            title: 'Left panel',
            collapsible: {
                animation: false,
                direction: 'left',
                collapsed: true
            },
            weight: 1,
            width: 250
        },
        {
            xtype: 'panel',
            docked: 'left',
            title: 'Left panel 2',
            collapsible: {
                animation: false,
                direction: 'left',
            },
            weight: 2,
            width: 250
        },
        {
            xtype: 'panel',
            title: 'Center panel',
            html: 'Bem vindo',
            flex: 1
        },
        {
            xtype: 'panel',
            docked: 'bottom',
            title: 'Bottom Panel',
            html: 'Footer',
            height: 100
        }
    ]
})