!function(a){Craft.TableFieldSettings=Garnish.Base.extend({columnsTableName:null,defaultsTableName:null,columnsTableId:null,defaultsTableId:null,columnsTableInputPath:null,defaultsTableInputPath:null,defaults:null,columnSettings:null,columnsTable:null,defaultsTable:null,init:function(a,b,c,d,e){this.columnsTableName=a,this.defaultsTableName=b,this.columnsTableId=Craft.formatInputId(this.columnsTableName),this.defaultsTableId=Craft.formatInputId(this.defaultsTableName),this.columnsTableInputPath=Craft.filterArray(this.columnsTableName.split(/[\[\]]+/)),this.defaultsTableInputPath=Craft.filterArray(this.defaultsTableName.split(/[\[\]]+/)),this.defaults=d,this.columnSettings=e,this.initColumnsTable(),this.initDefaultsTable(c)},initColumnsTable:function(){this.columnsTable=new Craft.EditableTable(this.columnsTableId,this.columnsTableName,this.columnSettings,{rowIdPrefix:"col",onAddRow:a.proxy(this,"onAddColumn"),onDeleteRow:a.proxy(this,"reconstructDefaultsTable")}),this.initColumnSettingInputs(this.columnsTable.$tbody),this.columnsTable.sorter.settings.onSortChange=a.proxy(this,"reconstructDefaultsTable")},initDefaultsTable:function(a){this.defaultsTable=new Craft.EditableTable(this.defaultsTableId,this.defaultsTableName,a,{rowIdPrefix:"row"})},onAddColumn:function(a){this.reconstructDefaultsTable(),this.initColumnSettingInputs(a)},initColumnSettingInputs:function(a){var b=a.find("td:first-child textarea, td:nth-child(3) textarea"),c=a.find("td:nth-child(4) select");this.addListener(b,"textchange","reconstructDefaultsTable"),this.addListener(c,"change","reconstructDefaultsTable")},reconstructDefaultsTable:function(){for(var a=Craft.expandPostArray(Garnish.getPostData(this.columnsTable.$tbody)),b=Craft.expandPostArray(Garnish.getPostData(this.defaultsTable.$tbody)),c=a,d=b,e=0;e<this.columnsTableInputPath.length;e++){var f=this.columnsTableInputPath[e];c=c[f]}for(var e=0;e<this.defaultsTableInputPath.length;e++){var f=this.defaultsTableInputPath[e];if("undefined"==typeof d[f]){d={};break}d=d[f]}var g='<table id="'+this.defaultsTableId+'" class="editable shadow-box"><thead><tr>';for(var h in c)g+='<th scope="col" class="header">'+(c[h].heading?c[h].heading:"&nbsp;")+"</th>";g+='<th class="header" colspan="2"></th></tr></thead><tbody>';for(var i in d)g+=Craft.EditableTable.getRowHtml(i,c,this.defaultsTableName,d[i]);g+="</tbody></table>",this.defaultsTable.$table.replaceWith(g),this.defaultsTable.destroy(),delete this.defaultsTable,this.initDefaultsTable(c)}})}(jQuery);
//# sourceMappingURL=TableFieldSettings.js.map