Ext.define('MyModernApp.view.layouts.Accordion', {
    extend: 'Ext.panel.Accordion',
    alias: 'widget.accordion_layout',
    title: 'Exemplo Accordion Layout',
    //openable: 2,
    openable: 1,

    defaults: {
        xtype: 'panel',
        border: 1,
        shadow: true,
        margin: 5,
        html: 'Texto aqui...'
    },

    items: [
        {
            title: 'Panel 1'
        },
        {
            title: 'Panel 2'
        },
        {
            title: 'Panel 3'
        }
    ]
})