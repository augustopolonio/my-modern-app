Ext.define('MyModernApp.view.layouts.Fit', {
    extend: 'Ext.Panel',
    alias: 'widget.fit_layout',
    layout: 'fit',
    defaults: {
        margin: 10,
        shadow: true,
        border: 1        
    },

    items: [
        {            
            xtype: 'panel',
            title: 'Panel 1'
        }
    ]
})