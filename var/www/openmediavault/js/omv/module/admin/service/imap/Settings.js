Ext.define("OMV.module.admin.service.imap.Settings", {
    extend: "OMV.workspace.form.Panel",

    rpcService: "IMAP",
    rpcGetMethod: "getSettings",
    rpcSetMethod: "setSettings",

    getFormItems: function() {
        return [{
            xtype: "fieldset",
            title: _("General"),
            fieldDefaults: {
                labelSeparator: ""
            },
            items: [{
                xtype: "checkbox",
                name: "enable",
                fieldLabel: _("Enable"),
                checked: false
            }, {
                xtype: "numberfield",
                name: "maxperip",
                fieldLabel: _("Max. connections per host"),
                minValue: 0,
                maxValue: 100,
                allowDecimals: false,
                allowBlank: false,
                plugins: [{
                    ptype: "fieldinfo",
                    text: _("Maximum number of connections per IP")
                }]
            }, {
                xtype: "textfield",
                name: "domain",
                fieldLabel: _("Local domain"),
                allowBlank: true,
                plugins: [{
                        ptype: "fieldinfo",
                        text: _("Domain for which this server will accept email.")
                }]
            }]
        }];
    }
});

OMV.WorkspaceManager.registerPanel({
    id: "settings",
    path: "/service/imap",
    text: _("Settings"),
    position: 10,
    className: "OMV.module.admin.service.imap.Settings"
});
