Ext.define('MyModernApp.view.layouts.Center', {
    extend: 'Ext.Panel',
    alias: 'widget.center_layout',
    title: 'Exemplo Center Layout',
    layout: 'center',

    items: [
        {            
            xtype: 'panel',
            title: 'Panel 1',
            border: 1,
            shadow: true,
            height: '50%',
            width: '50%'
        }
    ]
})