var foundComps = [];
for(var i = 1; i <= app.project.numItems; i++) {
    if(app.project.item(i) instanceof CompItem) {
            foundComps.push(app.project.item(i));
        }
    }

generateThumbnails(foundComps);

function generateThumbnails(comps) {
        //app.beginUndoGroup("Generate Thumbnails");
        
        var rqItem, module;
        
        for(var i = 0; i < comps.length; i++) {
        comps[i].saveFrameToPng(comps[i].workAreaDuration*.5, File("~/Desktop/"+comps[i].name+ ".png"));
        
        rqItem = app.project.renderQueue.items.add(comps[i]);
        module = rqItem.outputModule(1);
        module.file = File("~/Desktop/"+comps[i].name+".avi");
            }
        
        app.project.renderQueue.queueInAME(true); 
        
        //app.endUndoGroup();
    }