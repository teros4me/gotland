ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3006").setExtent([704632.834637, 6402676.881649, 743662.806684, 6426832.439152]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_socknar_3 = new ol.format.GeoJSON();
var features_socknar_3 = format_socknar_3.readFeatures(json_socknar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_socknar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_socknar_3.addFeatures(features_socknar_3);
var lyr_socknar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_socknar_3, 
                style: style_socknar_3,
                interactive: true,
                title: '<img src="styles/legend/socknar_3.png" /> socknar'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_socknar_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_GoogleHybrid_2,lyr_socknar_3];
lyr_socknar_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'objektiden': 'objektiden', 'objektvers': 'objektvers', 'version_gi': 'version_gi', 'sockenstad': 'sockenstad', 'socken': 'socken', 'sockenst_2': 'sockenst_2', 'omradesnum': 'omradesnum', 'huvudomrad': 'huvudomrad', 'sockenst_3': 'sockenst_3', });
lyr_socknar_3.set('fieldImages', {'OBJECTID': 'Hidden', 'objektiden': 'Hidden', 'objektvers': 'Hidden', 'version_gi': 'Hidden', 'sockenstad': 'Hidden', 'socken': 'TextEdit', 'sockenst_2': 'Hidden', 'omradesnum': 'Hidden', 'huvudomrad': 'Hidden', 'sockenst_3': 'Hidden', });
lyr_socknar_3.set('fieldLabels', {'socken': 'header label', });
lyr_socknar_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});